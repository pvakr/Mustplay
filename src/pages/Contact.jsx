import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Navigations from './Navigation';
import Footer from './Footer';
import StickyFooter from './StickyFooter';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    enquiryType: 'General',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // FormSubmit.co endpoint with hidden recipient email
    const formEndpoint = 'https://formsubmit.co/ajax/mustplaygames@gmail.com';
    
    fetch(formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        _subject: `New Contact Form Submission - ${formData.enquiryType}`,
        _template: 'box'
      })
    })
    .then(response => response.json())
    .then(data => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        enquiryType: 'General',
        message: ''
      });
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting your form. Please try again.');
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 to-purple-950 py-8">
      <Navigations />
      <Container className="py-5 flex-grow">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-2">Let's Discuss Business</h2>
          <p className="text-purple-200 mb-8">Request a Call</p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label className="text-white">Your Name (required)</Form.Label>
              <Form.Control 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/20 border-purple-400 text-white placeholder-purple-300"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-white">Your Email (required)</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/20 border-purple-400 text-white placeholder-purple-300"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-white">Company (required)</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="bg-white/20 border-purple-400 text-white placeholder-purple-300"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-white">Enquiry Type</Form.Label>
              <Form.Select
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className="bg-white/20 border-purple-400 text-white"
              >
                <option>General</option>
                <option>Partnership</option>
                <option>Support</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-6">
              <Form.Label className="text-white">Message (required)</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="bg-white/20 border-purple-400 text-white placeholder-purple-300"
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 border-0 text-lg font-semibold transition-colors"
            >
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <StickyFooter />
      <Footer />
    </div>
  );
};

export default Contact;