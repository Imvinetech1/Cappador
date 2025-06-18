# CAPPADOR Global - Laravel-like Application

A modern, responsive website for CAPPADOR Global, built with a Laravel-inspired structure using PHP, HTML, CSS, and JavaScript.

## Features

- **Modern Design**: Inspired by GSS Security with professional styling
- **Responsive Layout**: Mobile-friendly design
- **Laravel-like Structure**: Organized file structure similar to Laravel
- **Simple Routing**: PHP-based routing system
- **Dynamic Content**: PHP templating system
- **SEO Optimized**: Proper meta tags and structure

## Project Structure

```
cappador-laravel/
├── index.php              # Main entry point
├── .htaccess              # URL rewriting rules
├── views/                 # View templates
│   ├── layouts/
│   │   └── app.php        # Main layout template
│   ├── home.php           # Home page
│   ├── about.php          # About page
│   ├── services.php       # Services page
│   ├── portfolio.php      # Portfolio page
│   ├── contact.php        # Contact page
│   ├── blog.php           # Blog page
│   ├── careers.php        # Careers page
│   └── errors/
│       └── 404.php        # 404 error page
├── public/                # Public assets
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── js/
│   │   └── main.js        # Main JavaScript
│   └── images/            # Image assets
├── config/                # Configuration files
└── database/              # Database files (if needed)
```

## Setup Instructions

### Option 1: Using PHP Built-in Server

1. **Navigate to the project directory**:
   ```bash
   cd cappador-laravel
   ```

2. **Start PHP server**:
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**:
   - Go to: `http://localhost:8000`

### Option 2: Using XAMPP/Apache

1. **Copy project to htdocs**:
   - Copy the `cappador-laravel` folder to your XAMPP `htdocs` directory

2. **Start Apache**:
   - Open XAMPP Control Panel
   - Start Apache service

3. **Access the website**:
   - Go to: `http://localhost/cappador-laravel`

### Option 3: Using Live Server (VS Code)

1. **Install Live Server extension** in VS Code
2. **Right-click on index.php** and select "Open with Live Server"

## Pages

- **Home** (`/`): Main landing page with hero section and services overview
- **About** (`/about`): Company information and team details
- **Services** (`/services`): Detailed service offerings
- **Portfolio** (`/portfolio`): Project showcase
- **Contact** (`/contact`): Contact form and information
- **Blog** (`/blog`): Company blog and news
- **Careers** (`/careers`): Job opportunities

## Customization

### Adding New Pages

1. **Create view file** in `views/` directory
2. **Add route** in `index.php`
3. **Update navigation** in `views/layouts/app.php`

### Styling

- Main styles are in `public/css/styles.css`
- Uses CSS custom properties for easy theming
- Responsive design with mobile-first approach

### JavaScript

- Main functionality in `public/js/main.js`
- Includes mobile menu, smooth scrolling, and form validation

## Technologies Used

- **PHP**: Backend logic and templating
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive features
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Performance Features

- **Optimized Images**: Compressed and properly sized
- **Minified CSS/JS**: For production use
- **Caching Headers**: Static asset caching
- **Lazy Loading**: For images
- **Gzip Compression**: Enabled via .htaccess

## Security Features

- **XSS Protection**: Headers configured
- **Content Type Sniffing**: Disabled
- **Frame Options**: DENY to prevent clickjacking
- **Input Validation**: Form validation implemented

## Deployment

### Shared Hosting

1. Upload all files to your web hosting
2. Ensure `.htaccess` is uploaded
3. Configure domain to point to the directory

### VPS/Dedicated Server

1. Upload files to `/var/www/html/`
2. Set proper permissions
3. Configure Apache/Nginx virtual host

## Future Enhancements

- [ ] Database integration
- [ ] Admin panel
- [ ] Blog CMS
- [ ] Contact form backend
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Advanced SEO features

## Support

For support or questions, contact:
- Email: cappadorproperty@yahoo.com
- Phone: 08080602004

## License

This project is proprietary and confidential. All rights reserved. 