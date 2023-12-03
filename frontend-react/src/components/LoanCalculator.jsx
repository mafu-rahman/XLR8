import React, { useState } from 'react';

const LoanCalculator = () => {
    const [formData, setFormData] = useState({
      principal: '',
      interest: '',
      num_months: '',
      downPayment: '',
      tradeIn: '',
    });

    const [output, setOutput] = useState({
        totalPrice: '',
        monthlyValue: '',
        biWeeklyValue: '',
        weeklyValue: '',
      });

  
      const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form data submitted:', formData);
      
      handleGetRequest();
      
    };
    
    const handleGetRequest = async () => {
        try {
          const queryParams = new URLSearchParams(formData).toString();
    
          const response = await fetch(`https://axlr8-backend.onrender.com/api/v1/loan/calculate-loan?${queryParams}`, {
            method: 'GET',
            headers: {
              // Add any headers if needed
            },
          });

    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          console.log('Response from server:', data);

          setOutput({
            totalPrice: data * formData.num_months,
            monthlyValue: data,
            biWeeklyValue: data/2,
            weeklyValue: data/4,
          });


        } catch (error) {
          console.error('Error during GET request:', error.message);
        }
      };
  
  
    return (
        <>
            <div className="flex flex-col items-center lg:flex-row">

                <form className="max-w-md mx-auto mb-8 lg:mb-10 mt-20" onSubmit={handleSubmit}>
                    <label htmlFor="principal" className="block mb-2 text-sm font-bold text-gray-600">
                        Price of new Vehicle:
                    </label>
                    <input
                        type="number"
                        id="principal"
                        name="principal"
                        value={formData.principal}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="$"
                    />

                    <label htmlFor="interest" className="block mb-2 text-sm font-bold text-gray-600">
                        Interest Rate:
                    </label>
                    <input
                        type="number"
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="%"
                    />

                    <label htmlFor="num_months" className="block mb-2 text-sm font-bold text-gray-600">
                        Loan Duration:
                    </label>
                    <input
                        type="number"
                        id="num_months"
                        name="num_months"
                        value={formData.num_months}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="24 Months"
                    />

                    <label htmlFor="downPayment" className="block mb-2 text-sm font-bold text-gray-600">
                        Down Payment:
                    </label>
                    <input
                        type="number"
                        id="downPayment"
                        name="downPayment"
                        value={formData.downPayment}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="$"
                    />

                    <label htmlFor="tradeIn" className="block mb-2 text-sm font-bold text-gray-600">
                        Trade-In Value:
                    </label>
                    <input
                        type="number"
                        id="tradeIn"
                        name="tradeIn"
                        value={formData.tradeIn}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="$"
                    />

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
                        Calculate
                    </button>
                </form>

                {/* Output Section */}
                <div className="max-w-md mx-auto mt-8 lg:mt-0">
                    <div className="grid grid-rows-4 gap-4">

                        <div>
                            <label>Total Price:</label> {output.totalPrice}
                        </div>
                        <div>
                            <label>Bi-weekly Payment:</label> {output.biWeeklyValue}
                        </div>
                        <div>
                            <label>Weekly Payment:</label> {output.weeklyValue}
                        </div>
                        <div>
                            <label>Monthly Payment:</label> {output.monthlyValue}
                        </div>
                    </div>
                </div>
            </div>
    </>

    );
  };
  
  export default LoanCalculator;