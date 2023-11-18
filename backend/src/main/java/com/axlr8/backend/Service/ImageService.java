package com.axlr8.backend.Service;

import java.io.IOException;
import java.util.Optional;
import java.util.zip.DataFormatException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.axlr8.backend.DAO.ImageRepo;
import com.axlr8.backend.Model.Image;
import com.axlr8.backend.Service.utils.ImageUtils;

import jakarta.transaction.Transactional;

@Service
public class ImageService {

    private final ImageRepo imageRepo;

    @Autowired
    public ImageService(ImageRepo imageRepo){
        this.imageRepo = imageRepo;
    }

    public String uploadImage(MultipartFile imageFile) throws IOException {
        Image image = Image.builder()
            .name(imageFile.getOriginalFilename())
            .type(imageFile.getContentType())
            .imageData(ImageUtils.compressImage(imageFile.getBytes()))
            .build();

        this.imageRepo.save(image);
        
        return "File Uploaded Successfully: "+ imageFile.getOriginalFilename();
    }

    @Transactional
    public byte[] downloadImage(String imageName) throws DataFormatException {
        Optional<Image> dbImage = this.imageRepo.findByName(imageName);
        byte[] image = ImageUtils.decompressImage(dbImage.get().getImageData());
        return image;
    }

    @Transactional
    public Image getInfoByImageByName(String imageName) {
        Optional<Image> dbImage = this.imageRepo.findByName(imageName);

        return Image.builder()
            .name(dbImage.get().getName())
            .type(dbImage.get().getType())
            .imageData(ImageUtils.decompressImage(dbImage.get().getImageData()))
            .build();
    }
}
