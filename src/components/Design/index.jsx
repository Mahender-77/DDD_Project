
import React, { useState } from 'react';
import './index.css';
import { TextField, InputAdornment, Card, CardContent, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Design = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const templates = [
    { name: 'Portfolio Template', description: 'Professional portfolio design' },
    { name: 'E-commerce Template', description: 'Online store layout' },
    { name: 'Blog Template', description: 'Personal blog design' },
    { name: 'Landing Page', description: 'Business landing page' },
    { name: 'Dashboard Template', description: 'Admin dashboard layout' },
    { name: 'Restaurant Template', description: 'Restaurant website design' },
    { name: 'Agency Template', description: 'Digital agency website' },
    { name: 'Educational Template', description: 'Learning platform layout' },
  ];

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="design">
      <div className="search-container">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search templates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: '600px', margin: '20px auto', display: 'block' }}
        />
      </div>
      <Grid container spacing={3} sx={{ padding: '20px' }}>
        {filteredTemplates.map((template, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { transform: 'scale(1.02)', transition: 'transform 0.2s' } }}>
              <CardContent>
                <h3>{template.name}</h3>
                <p>{template.description}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

