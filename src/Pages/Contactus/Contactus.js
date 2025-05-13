import React, { useState } from 'react';
import './Contactus.css';

const Contactus = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        gender: '',
        interests: [],
        country: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                interests: checked
                    ? [...prev.interests, value]
                    : prev.interests.filter(item => item !== value)
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Form submitted!');
    };

    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <div className="radio-group">
                        <label><input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} /> Male</label>
                        <label><input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Interests</label>
                    <div className="checkbox-group">
                        <label><input type="checkbox" name="interests" value="Coding" onChange={handleChange} checked={formData.interests.includes('Coding')} /> Coding</label>
                        <label><input type="checkbox" name="interests" value="Design" onChange={handleChange} checked={formData.interests.includes('Design')} /> Design</label>
                        <label><input type="checkbox" name="interests" value="Marketing" onChange={handleChange} checked={formData.interests.includes('Marketing')} /> Marketing</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Country</label>
                    <select name="country" value={formData.country} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Contactus;
