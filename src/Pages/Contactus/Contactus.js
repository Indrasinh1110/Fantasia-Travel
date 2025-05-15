import React, { useState } from 'react';
import './Contactus.css';

const Contactus = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        role: '',
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
        alert('Thank you! Our corporate travel team will reach out shortly.');
    };

    return (
        <div className="form-container">
            <h2>Corporate Travel Enquiry</h2>
            <p className="form-subtitle">Let us handle your next business trip — seamless and professional.</p>

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
                    <label>Company Name</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Role / Designation</label>
                    <input type="text" name="role" value={formData.role} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Travel Interests</label>
                    <div className="checkbox-group">
                        <label><input type="checkbox" name="interests" value="Business Retreats" onChange={handleChange} checked={formData.interests.includes('Business Retreats')} /> Business Retreats</label>
                        <label><input type="checkbox" name="interests" value="Team Building" onChange={handleChange} checked={formData.interests.includes('Team Building')} /> Team Building</label>
                        <label><input type="checkbox" name="interests" value="Executive Meetings" onChange={handleChange} checked={formData.interests.includes('Executive Meetings')} /> Executive Meetings</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Preferred Destination</label>
                    <select name="country" value={formData.country} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="India">India</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Italy">Italy</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Message / Specific Requirements</label>
                    <textarea name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit Request</button>
            </form>
        </div>
    );
};

export default Contactus;
