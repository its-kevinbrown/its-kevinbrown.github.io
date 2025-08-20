// Extended project data with more details
const projectsData = {
    'telegram-chatbot': {
        title: 'Web Scraping',
        category: 'Data Scraping',
        description: `I developed a Python-based project that leverages web scraping techniques to extract real-time data from a Wikipedia page listing the largest companies in the United States. The data was cleaned and structured into a Pandas DataFrame for further exploration and analysis. This project highlights my skills in data collection, preprocessing, and analysis, as well as my ability to transform raw web data into meaningful, structured insights.`,

        image: 'assets/web scraping.jpg',
        technologies: ['Python', 'Panda'],
        features: [
            'Web Scraping: Extracted real-time data from Wikipedia using Python-based scraping techniques.',
            'Data Structuring: Organized raw HTML content into a clean, well-structured Pandas DataFrame.',
            'Data Cleaning & Preprocessing: Handled inconsistencies and formatted the dataset for analysis.',
            'Analytical Foundation: Created a structured dataset that can be used for insights, visualization, or further modeling.'
        ],
        metrics: [
            {
                value: '85%',
                label: 'Query Resolution Rate'
            },
            {
                value: '24/7',
                label: 'Availability'
            },
            {
                value: '3.5s',
                label: 'Average Response Time'
            }
        ],
        sourceUrl: 'https://github.com/its-kevinbrown/python_web_scrapping_and_panda/blob/main/Data%20Scrapping.ipynb'
    },
    'bank-complaints': {
        title: 'World Layoffs (Data Cleaning and EDA)',
        category: 'analytics',
        description: `I worked on a dataset capturing company layoffs across the world, containing details such as percentage laid off, total employees affected, funds raised, company industry, and more. Using SQL, I performed extensive data cleaning to handle missing values and inconsistencies, and conducted exploratory analysis to uncover meaningful patterns and trends. This project demonstrates my ability to use SQL for data wrangling, querying, and insight generation from real-world datasets`,
        image: 'assets/sql.jpg',
        technologies: ['SQL'],
        features: [
            'Data Cleaning: Used SQL to handle missing values, duplicates, and inconsistencies in the dataset',
            'Exploratory Analysis: Queried data to identify trends in layoffs across industries, countries, and company sizes.',
            'Insight Generation: Analyzed key metrics such as percentage laid off, total layoffs, and funding raised to uncover patterns.',
            'Real-World Application: Worked with a global dataset reflecting real corporate events, highlighting practical SQL use cases.',
        ],
        metrics: [
            {
                value: '85%',
                label: 'Query Resolution Rate'
            },
            {
                 value: '24/7',
                label: 'Availability'
            },
            {
                value: '3.5s',
                label: 'Average Response Time'
            },
            
        ],
        sourceUrl: 'https://github.com/its-kevinbrown/MySQL_data_analysis_portfolio'
    },

    'tdg-forex': {
        title: 'Bike Sales Analysis (Excel)',
        category: 'excel',
        description: `I analyzed a dataset on global bike sales using Microsoft Excel. The project involved performing thorough data cleaning, leveraging Pivot Tables for multi-dimensional analysis, and creating an interactive dashboard to visualize key sales insights. This project highlights my ability to transform raw sales data into clear, actionable insights through effective Excel data analysis and visualization.`,
        image: 'assets/Excel.jpg',
        technologies: ['SQL'],
        features:[
            'Data Cleaning: Prepared and structured raw global bike sales data for accurate analysis.',
            'Pivot Table Analysis: Utilized Pivot Tables to explore sales trends across regions, product categories, and time periods.',
            'Dashboard Development: Designed an interactive Excel dashboard to visualize key sales metrics and insights.',
            'Business Insights: Delivered actionable findings to better understand sales performance and customer patterns.',
        ] ,
        metrics: [
            {
                value: '85%',
                label: 'Query Resolution Rate'
            },
            {
                 value: '24/7',
                label: 'Availability'
            },
            {
                value: '3.5s',
                label: 'Average Response Time'
            },
            
        ],
        sourceUrl: 'https://github.com/its-kevinbrown/Bike-Sales-Data-Analysis-and-Visualization'
    },
     'tab': {
        title: 'Air BnB Listings Analysis (Tableau Visualization)',
        category: 'Tableau',
        description: `I built an interactive Tableau dashboard to visualize Airbnb listings in Seattle, focusing on key performance metrics. The analysis included yearly revenue trends, price distribution across zip codes (via maps), and average pricing by number of bedrooms. This project demonstrates my ability to use Tableau for transforming raw data into insightful, visually engaging, and interactive dashboards that support data-driven decision-making.`,
        image: 'assets/tableau.jpg',
        technologies: ['Tableau'],
        features:[
            'Revenue Analysis: Visualized yearly revenue trends to highlight business performance over time.',
            'Geospatial Insights: Mapped price distribution across Seattle zip codes for location-based analysis.',
            'Pricing Patterns: Analyzed average listing prices by bedroom count to uncover accommodation trends.',
            'Interactive Dashboard: Designed an intuitive Tableau dashboard enabling dynamic exploration of insights.',
        ] ,
        metrics: [
            {
                value: '85%',
                label: 'Query Resolution Rate'
            },
            {
                 value: '24/7',
                label: 'Availability'
            },
            {
                value: '3.5s',
                label: 'Average Response Time'
            },
            
        ],
        sourceUrl: 'https://public.tableau.com/app/profile/kevin.ogonda/viz/AirBnBTableauProject_17556103710340/Dashboard1'
    },
    'python': {
        title: 'Python Analysis (Data Cleaning)',
        category: 'Python',
        description: `I developed a data cleaning workflow using Python and Pandas to process a call center customer directory. The project involved standardizing phone numbers, dropping irrelevant tables, removing null values, and filtering customers flagged for call-back by the call center. This project highlights my ability to apply Python for data wrangling, quality assurance, and preparing datasets for operational use.`,
        image: 'assets/python.jpg',
        technologies: ['Python', 'Panda'],
        features:[
            'Data Standardization: Cleaned and formatted the phone number column to ensure consistency',
            'Data Reduction: Dropped irrelevant tables to streamline the dataset for analysis.',
            'Data Quality Improvement: Removed null values to maintain dataset accuracy and reliability.',
            'Operational Filtering: Isolated customers flagged for call-back to support call center workflows.',
        ] ,
        metrics: [
            {
                value: '95%',
                label: 'Query Resolution Rate'
            },
            {
                 value: '24/7',
                label: 'Availability'
            },
            {
                value: '3.5s',
                label: 'Average Response Time'
            },
            
        ],
        sourceUrl: 'https://github.com/its-kevinbrown/Data-cleaning-in-panda/blob/main/Data%20Cleaning%20in%20Pandas.ipynb'
    },
    
};

// Get project ID from URL
const getProjectId = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
};

// Update page content
const updateProjectContent = (project) => {
    if (!project) {
        window.location.href = 'index.html';
        return;
    }

    // Update title and meta
    document.title = `${project.title} | Portfolio`;
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectCategory').textContent = project.category;
    
    // Update image
    const projectImage = document.getElementById('projectImage');
    projectImage.src = project.image;
    projectImage.alt = project.title;
    
    // Update description
    document.getElementById('projectDescription').textContent = project.description;
    
    // Update technologies
    const techList = document.getElementById('techList');
    techList.innerHTML = project.technologies.map(tech => `
        <li>${tech}</li>
    `).join('');
    
    // Update features
    const featureList = document.getElementById('featureList');
    featureList.innerHTML = project.features.map(feature => `
        <li>${feature}</li>
    `).join('');
    
    // Update metrics
    const metricsGrid = document.getElementById('metricsGrid');
    metricsGrid.innerHTML = project.metrics.map(metric => `
        <div class="metric-card">
            <div class="metric-card__value">${metric.value}</div>
            <div class="metric-card__label">${metric.label}</div>
        </div>
    `).join('');
    
    // Update action buttons
    const liveDemo = document.getElementById('liveDemo');
    const sourceCode = document.getElementById('sourceCode');
    
    if (project.demoUrl) {
        liveDemo.href = project.demoUrl;
        liveDemo.style.display = 'inline-flex';
    } else {
        liveDemo.style.display = 'none';
    }
    
    if (project.sourceUrl) {
        sourceCode.href = project.sourceUrl;
        sourceCode.style.display = 'inline-flex';
    } else {
        sourceCode.style.display = 'none';
    }
};

// Handle 404 cases
const handleProjectNotFound = () => {
    const container = document.querySelector('.project-detail .container');
    if (container) {
        container.innerHTML = `
            <div class="project-not-found">
                <h1>Project Not Found</h1>
                <p>The project you're looking for doesn't exist or has been moved.</p>
                <a href="index.html" class="btn btn--primary">Back to Projects</a>
            </div>
        `;
    }
};

// Initialize page
const initProjectDetail = () => {
    const projectId = getProjectId();
    
    if (!projectId) {
        handleProjectNotFound();
        return;
    }

    const project = projectsData[projectId];
    
    if (project) {
        updateProjectContent(project);
    } else {
        handleProjectNotFound();
    }
};

// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', initProjectDetail);
