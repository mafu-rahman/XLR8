package com.axlr8.backend.controller;

import java.io.IOException;
import java.util.zip.DataFormatException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.axlr8.backend.Model.Image;
import com.axlr8.backend.Service.ImageService;

import jakarta.websocket.server.PathParam;

@RestController
@RequestMapping("api/v1/image")
public class ImageController {
    
    @Autowired
    private ImageService imageService;

    @PostMapping
    public String upLoadImage(@RequestParam("image") MultipartFile multipartFile) throws Exception{
        return this.imageService.uploadImage(multipartFile);
    }

    @GetMapping(value = "/{name}", produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] downloadImage(@PathVariable(value = "name") String imageName) throws DataFormatException, IOException {
        return this.imageService.downloadImage(imageName);
    }

    @GetMapping(value = "/info/{name}")
    public Image getInfoByImageByName(@PathParam(value = "name") String imageName){
        return this.imageService.getInfoByImageByName(imageName);
    }
}
