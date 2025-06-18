<?php
/**
 * CAPPADOR Global - Laravel-like Application
 * Main Entry Point
 */

// Start session
session_start();

// Simple routing
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Remove trailing slash
$path = rtrim($path, '/');

// Default route
if ($path === '' || $path === '/') {
    $path = '/home';
}

// Route mapping
$routes = [
    '/home' => 'views/home.php',
    '/about' => 'views/about.php',
    '/services' => 'views/services.php',
    '/portfolio' => 'views/portfolio.php',
    '/contact' => 'views/contact.php',
    '/blog' => 'views/blog.php',
    '/careers' => 'views/careers.php'
];

// Check if route exists
if (isset($routes[$path])) {
    $view_file = $routes[$path];
    if (file_exists($view_file)) {
        include 'views/layouts/app.php';
    } else {
        http_response_code(404);
        include 'views/errors/404.php';
    }
} else {
    http_response_code(404);
    include 'views/errors/404.php';
}
?> 