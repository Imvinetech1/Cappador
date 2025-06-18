<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($page_title) ? $page_title : 'CAPPADOR Global'; ?> - Revolutionizing Real Estate, Security, Construction & Facility Solutions in Nigeria</title>
    <meta name="description" content="<?php echo isset($page_description) ? $page_description : 'CAPPADOR Global delivers top-tier integrated services across real estate, construction, security, and facility management in Nigeria.'; ?>">
    <meta name="author" content="CAPPADOR Global">

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="CAPPADOR Global - Integrated Property Solutions">
    <meta property="og:description" content="Revolutionizing Real Estate, Security, Construction & Facility Solutions in Nigeria with comprehensive integrated services.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="/public/images/capador-mall.jpg">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@lovable_dev">
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="/public/css/styles.css">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Header Section -->
    <header class="header">
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="container">
                <div class="top-bar-content">
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fa-solid fa-phone"></i>
                            <span>08080602004</span>
                        </div>
                        <div class="contact-item">
                            <i class="fa-solid fa-envelope"></i>
                            <span>cappadorproperty@yahoo.com</span>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Navigation -->
        <nav class="navbar">
            <div class="container">
                <div class="navbar-content">
                    <a href="/" class="logo">
                        <img src="/public/images/capador_logo2-removebg-preview.png" alt="CAPPADOR Global" style="height: 60px; width: auto;">
                    </a>
                    
                    <div class="menu-toggle">
                        <i class="fa-solid fa-bars"></i>
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    
                    <div class="nav-menu">
                        <ul class="nav-links">
                            <li><a href="/" class="<?php echo $path === '/home' ? 'active' : ''; ?>">Home</a></li>
                            <li><a href="/about" class="<?php echo $path === '/about' ? 'active' : ''; ?>">About Us</a></li>
                            <li><a href="/services" class="<?php echo $path === '/services' ? 'active' : ''; ?>">Services</a></li>
                            <li><a href="/portfolio" class="<?php echo $path === '/portfolio' ? 'active' : ''; ?>">Portfolio</a></li>
                            <li><a href="/blog" class="<?php echo $path === '/blog' ? 'active' : ''; ?>">Blog</a></li>
                            <li><a href="/careers" class="<?php echo $path === '/careers' ? 'active' : ''; ?>">Careers</a></li>
                            <li><a href="/contact" class="<?php echo $path === '/contact' ? 'active' : ''; ?>">Contact</a></li>
                        </ul>
                        <a href="/contact" class="btn btn-primary">Get Quote</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <!-- Main Content -->
    <main>
        <?php include $view_file; ?>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>Browse Our Website</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/careers">Careers</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Address</h3>
                    <p>
                        CAPPADOR Global – Head Office<br>
                        No. 8 Aguyi Ironsi Street,<br>
                        Maitama, Abuja, Nigeria
                    </p>
                </div>
                
                <div class="footer-section">
                    <h3>Phone</h3>
                    <p>08080602004</p>
                    <p>+234 803 377 3771</p>
                </div>
                
                <div class="footer-section">
                    <h3>Email</h3>
                    <p>cappadorproperty@yahoo.com</p>
                    <p>info@cappador.com</p>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> CAPPADOR Global. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="/public/js/main.js"></script>
</body>
</html> 