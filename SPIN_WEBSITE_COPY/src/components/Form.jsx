import axios from 'axios';
import { useState } from 'react';
import Button from './Button';

const SurveyForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        totalPremium: '',
        residentialPercentage: 0,
        citizensPolicies: 0,
        averageHO3: 0,
        averageHO6: 0,
        averageHO8: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSliderChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: parseInt(value, 10) });
    };

    const formatCurrency = (value) => {
        const numericValue = value.replace(/[^0-9.]/g, '');
        const number = parseFloat(numericValue);
        if (!isNaN(number)) {
            return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
        return '';
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('DATA', formData);
            const response = await axios.post('https://sheet.best/api/sheets/8f12cdd6-6c4b-4ad0-8fa1-4d00dbeec550', formData).then((response) => {
                console.log('response', response);
            });
            if (response.data.message === 'Success') {
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    totalPremium: '',
                    residentialPercentage: 0,
                    citizensPolicies: 0,
                    averageHO3: 0,
                    averageHO6: 0,
                    averageHO8: 0

                });
                onSuccess();


            } else {
                console.error('Error al enviar el formulario else:', response.data);
            }
        } catch (error) {
            console.error('Error al enviar el formulario catch:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} >


         <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2col-span-1">
                <div className="flex flex-col mb-4">
                    <label className="text-gray-700 dark:text-gray-200 ">Agency Name*</label>
                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 
                    dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring " type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
            </div> 

        
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2col-span-1">
                <div className="flex flex-col mb-4">
                    <label htmlFor="email" className=" text-gray-700 dark:text-gray-200 ">Email*</label>
                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring " type="text" name="email" value={formData.email} onChange={handleChange} required />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2col-span-1">
                <div className="flex flex-col mb-4">
                    <label htmlFor="phoneNumber" className="text-gray-700 dark:text-gray-200 ">Phone Number</label>
                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex flex-col mb-4">
                    <label htmlFor="totalPremium" className="text-gray-700 dark:text-gray-200 ">What is your agency's total written premium?</label>
                    <input
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        type="text"
                        name="totalPremium"
                        value={formData.totalPremium}
                        onChange={handleChange}
                        onBlur={(e) => setFormData({ ...formData, totalPremium: formatCurrency(e.target.value) })}
                    />
                </div>
            </div>
            <div className="col-span-1 mb-4">
                <div className="flex flex-col">
                    <label className="text-gray-700 dark:text-gray-200">What percentage of the premium is residential?</label>
                    <div className="flex items-center">
                        <input
                            type="range"
                            name="residentialPercentage"
                            min="0"
                            max="100"
                            value={formData.residentialPercentage}
                            onChange={handleSliderChange}
                            className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer text-blue-600"
                        />
                        <div className="ml-2 bg-blue-600 text-white text-xs rounded py-1 px-2">
                            {formData.residentialPercentage}%
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 mb-4">
                <div className="flex flex-col">
                    <label className="text-gray-700 dark:text-gray-200">How many Citizens Residential policies (HO3, HO6, and HO8) do you currently have in force?</label>
                    <div className="flex items-center">
                        <input
                            type="range"
                            name="citizensPolicies"
                            min="0"
                            max="1000"
                            value={formData.citizensPolicies}
                            onChange={handleSliderChange}
                            className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer text-blue-600"
                        />
                        <div className="ml-2 bg-blue-600 text-white text-xs rounded py-1 px-2">
                            {formData.citizensPolicies === 1000 ? "1000+" : formData.citizensPolicies}
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="col-span-1 lg:col-span-2 text-lg font-semibold text-gray-800">On average, how many of the following policies do you write each month?</h2>
            <div className="col-span-1 lg:col-span-2 mb-4">
                <div className="flex items-center mb-4">
                    <label className="flex flex-row mb-2 text-sm font-semibold dark:text-gray-200 pr-8">HO3:</label>
                    <div className="flex items-center w-full">
                        <input
                            type="range"
                            name="averageHO3"
                            min="0"
                            max="200"
                            value={formData.averageHO3}
                            onChange={handleSliderChange}
                            className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer text-blue-600"
                        />
                        <div className="ml-2 bg-blue-600 text-white text-xs rounded py-1 px-2">
                            {formData.averageHO3 === 200 ? "200+" : formData.averageHO3}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-2 mb-4">
                <div className="flex items-center mb-4">
                    <label className="flex flex-row mb-2 text-sm font-semibold dark:text-gray-200 pr-8">HO6:</label>
                    <div className="flex items-center w-full">
                        <input
                            type="range"
                            name="averageHO6"
                            min="0"
                            max="200"
                            value={formData.averageHO6}
                            onChange={handleSliderChange}
                            className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer text-blue-600"
                        />
                        <div className="ml-2 bg-blue-600 text-white text-xs rounded py-1 px-2">
                            {formData.averageHO6 === 200 ? "200+" : formData.averageHO6}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-2 mb-4">
                <div className="flex items-center mb-4">
                    <label className="flex flex-row mb-2 text-sm font-semibold dark:text-gray-200 pr-8">HO8:</label>
                    <div className="flex items-center w-full">
                        <input
                            type="range"
                            name="averageHO8"
                            min="0"
                            max="200"
                            value={formData.averageHO8}
                            onChange={handleSliderChange}
                            className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer text-blue-600"
                        />
                        <div className="ml-2 bg-blue-600 text-white text-xs rounded py-1 px-2">
                            {formData.averageHO8 === 200 ? "200+" : formData.averageHO8}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-2 flex justify-center mt-8">
                <Button type="submit" />
                   </div>
        </form>
    );
};

export default SurveyForm;