const projectData = {
            kizunai: {
                title: "Kizunai - Social Connection App",
                description: "A comprehensive app for researchers and students built with Flutter and Django, featuring real-time data monitoring, user profiles, student anonymous tracking, and AI-powered explanation for lessons. The app focuses on creating meaningful connections through shared interests and activities.",
                technologies: ["Flutter", "Django", "MySql", "BLE", "WebSocket", "AI/ML"],
                images: [
                    "pictures/kizunai/kizunai0.png",
                    "pictures/kizunai/kizunai1.png",
                    "pictures/kizunai/kizunai2.png",
                    "pictures/kizunai/kizunai3.png",
                    "pictures/kizunai/kizunai4.png",

                ] 
            },
            intelligentia: {
                title: "Intelligentia Pro - AI Analytics Platform",
                description: "A multimedia video indexing system powered by YOLO for real-time object and person detection. The project processes videos to automatically identify and categorize visual content, and integrates speech recognition to generate synchronized captions—making videos searchable, accessible, and easier to analyze.",
                technologies: ["Python", "TensorFlow","AI/ML"],
                images: [
                    "pictures/ai/ai.jpeg",

                ]
            },
            webcraft: {
                title: "WebCraft Studio - Creative Portfolio Platform",
                description: "A modern portfolio creation platform that allows creatives to showcase their work with stunning visual effects and animations. Built with React and Node.js for optimal performance.",
                technologies: ["React", "Node.js", "Express", "MySQL", "Three.js", "GSAP"],
                images: [
                    "pictures/picsangular/ang0.png",
                    "pictures/picsangular/ang1.png",
                    "pictures/picsangular/ang2.png",
                    "pictures/picsangular/ang3.png",
                ]
            },
            enterprise: {
                title: "Enterprise Manager - Business Solution",
                description: "A university management system using Java EE for the backend and Angular for the frontend. The platform includes features for user and academic structure management, subject content and quizzes, and communication tools such as forums and messaging between students, teachers, and administration. It emphasizes scalability, security, and clean architecture while providing an intuitive interface for both students and staff.",
                technologies: ["Java EE", "Spring Boot", "Oracle DB", "Angular", "JPA", "JUnit"],
                images: [
                    "pictures/jee/jee.png"
                ]
            }
        };

        
        // Add this to your existing projectData object
        const achievementData = {
            basketball: {
                title: "Basketball Career - National Level",
                description: "14-year professional basketball journey representing Tunisia at national and international levels, including Jr NBA World Championship and FIBA competitions.",
                highlights: ["Vice World Champion Jr NBA 2018", "National Team (2017-2023)", "Arab Championship 2019", "FIBA African Championship"],
                images: [
                    "pictures/jrnba/jrnba6.jpeg",
                    "pictures/jrnba/jrnba0.jpg",
                    "pictures/jrnba/jrnba1.jpeg",
                    "pictures/jrnba/jrnba2.jpg",
                    "pictures/jrnba/jrnba3.jpg",
                    "pictures/jrnba/jrnba4.jpg",
                    "pictures/jrnba/jrnba5.jpg",
                    "pictures/jrnba/jrnba7.jpeg",
                    "pictures/jrnba/jrnba8.jpeg",
                    "pictures/jrnba/jrnba9.jpeg",
                    "pictures/jrnba/jrnba10.jpeg",

                    "pictures/national/national0.jpeg",
                    "pictures/national/national1.jpeg",
                    
                ]
            },
            multisport: {
                title: "Multi-Sport Athletic Foundation",
                description: "Early comprehensive athletic development across swimming, tennis, karate, and archery, building diverse physical and mental skills.",
                highlights: ["Swimming & Tennis (4 years each)", "Karate Training", "Archery Competition (5th Place)"],
                images: [
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&h=600&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center"
                ]
            },
            music: {
                title: "Musical Journey - Self-Taught Piano",
                description: "Personal musical exploration through self-taught piano practice, developing creativity and artistic expression alongside technical skills.",
                highlights: ["Self-taught since 2023", "Daily Practice Routine", "Home Studio Setup"],
                images: [
                    "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center"
                ]
            },
            resilience: {
                title: "Resilience & Comeback Story",
                description: "Mental fortitude demonstrated through injury recovery and career transitions, transforming challenges into opportunities for growth.",
                highlights: ["ACL Recovery Journey", "Mental Strength Training", "New Career Pursuits", "Adaptive Resilience"],
                images: [
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1594736797933-d0acc92d2e14?w=800&h=600&fit=crop&crop=center"
                ]
            }
        };

        const photographyData = {
            images: [
                // --- Travel ---
                { src: "pictures/photography/travel/travel0.jpeg", categories: ["travel", "urban"] },
                { src: "pictures/photography/travel/travel1.jpeg", categories: ["travel"] },
                { src: "pictures/photography/travel/travel2.jpeg", categories: ["travel"] },
                { src: "pictures/photography/travel/travel3.jpeg", categories: ["travel"] },
                { src: "pictures/photography/travel/travel4.jpeg", categories: ["travel", "urban", "monument"] },
                { src: "pictures/photography/travel/travel5.jpeg", categories: ["travel", "urban", "monument"] },
                { src: "pictures/photography/travel/travel6.jpeg", categories: ["travel", "urban"] },

                // --- Urban ---
                { src: "pictures/photography/urban/urban4.jpeg", categories: ["urban"] },

                // --- Nature ---
                { src: "pictures/photography/nature/nature0.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature1.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature2.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature3.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature4.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature5.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature6.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature7.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature8.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature9.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature10.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature11.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature12.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature13.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature14.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature15.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature16.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature17.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature18.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature19.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature20.jpeg", categories: ["nature"] },
                { src: "pictures/photography/nature/nature21.jpeg", categories: ["nature"] },
            ]
        };


        // Add this function to initialize achievement gallery
        // Update your initializeAchievementGallery function
        function initializeAchievementGallery() {
            const achievementCards = document.querySelectorAll('.milestone-card');
            
            achievementCards.forEach(card => {
                card.addEventListener('click', function(e) {
                    // Don't open gallery if clicking on external link
                    if (e.target.closest('.external-link')) {
                        return;
                    }
                    
                    const achievementId = this.getAttribute('data-achievement');
                    if (achievementData[achievementId]) {
                        openAchievementGallery(achievementId);
                    }
                });
            });
            
            // Add specific handling for external links to ensure they work
            const externalLinks = document.querySelectorAll('.external-link');
            externalLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent the card click event from firing
                });
            });
        }

        // Gallery functionality
        let currentProject = '';
        let currentImageIndex = 0;

        // DOM Content Loaded
        document.addEventListener('DOMContentLoaded', function() {
        initializeNavigation();
        initializePortfolioFilter();
        initializeGallery();
        initializeAnimations();
        initializeSkillBars();
        initializeContactForm();
        initializeMobileMenu();
        initializeAchievementGallery(); // Add this line
        initializePhotographyFilter();
        initializePhotoGallery();
        });


        

        // Navigation functionality
        function initializeNavigation() {
            const navLinks = document.querySelectorAll('.nav-link');
            const pages = document.querySelectorAll('.page');

            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetPage = this.getAttribute('data-page');
                    
                    // Remove active class from all nav links and pages
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    pages.forEach(page => page.classList.remove('active'));
                    
                    // Add active class to clicked nav link and corresponding page
                    this.classList.add('active');
                    document.getElementById(targetPage).classList.add('active');
                    
                    // Smooth scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });
        }

        // Portfolio filter functionality
        function initializePortfolioFilter() {
            const filterTabs = document.querySelectorAll('.filter-tab');
            const portfolioItems = document.querySelectorAll('.portfolio-item');

            filterTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const filter = this.getAttribute('data-filter');
                    
                    // Remove active class from all tabs
                    filterTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Filter portfolio items
                    portfolioItems.forEach(item => {
                        if (filter === 'all' || item.getAttribute('data-category') === filter) {
                            item.classList.remove('hidden');
                            item.style.opacity = '0';
                            setTimeout(() => {
                                item.style.opacity = '1';
                            }, 100);
                        } else {
                            item.classList.add('hidden');
                        }
                    });
                });
            });
        }

        // Gallery functionality
        function initializeGallery() {
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            const modal = document.getElementById('galleryModal');
            const closeBtn = document.getElementById('galleryClose');
            const prevBtn = document.getElementById('galleryPrev');
            const nextBtn = document.getElementById('galleryNext');

            // Open gallery when clicking on portfolio items
            portfolioItems.forEach(item => {
                item.addEventListener('click', function() {
                    const projectId = this.getAttribute('data-project');
                    openGallery(projectId);
                });
            });

            // Close gallery
            closeBtn.addEventListener('click', closeGallery);
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeGallery();
                }
            });

            // Navigation
            prevBtn.addEventListener('click', () => navigateGallery(-1));
            nextBtn.addEventListener('click', () => navigateGallery(1));

            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
                if (modal.classList.contains('active')) {
                    if (e.key === 'ArrowLeft') navigateGallery(-1);
                    if (e.key === 'ArrowRight') navigateGallery(1);
                    if (e.key === 'Escape') closeGallery();
                }
            });
        }

        // Update your openGallery function to handle achievements
        function openAchievementGallery(achievementId) {
            const achievement = achievementData[achievementId];
            if (!achievement) return;

            currentProject = achievementId;
            currentImageIndex = 0;

            const modal = document.getElementById('galleryModal');
            const title = document.getElementById('galleryTitle');
            const info = document.getElementById('galleryInfo');
            const techTags = document.getElementById('techTags');

            // Set achievement info
            title.textContent = achievement.title;
            info.innerHTML = `
                <h3>${achievement.title}</h3>
                <p>${achievement.description}</p>
            `;

            // Set highlights as tags
            techTags.innerHTML = achievement.highlights.map(highlight => 
                `<span class="tech-tag">${highlight}</span>`
            ).join('');

            // Create thumbnails
            createThumbnails(achievement.images);

            // Show first image
            updateMainImage();

            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function openGallery(projectId) {
            const project = projectData[projectId];
            if (!project) return;

            currentProject = projectId;
            currentImageIndex = 0;

            const modal = document.getElementById('galleryModal');
            const title = document.getElementById('galleryTitle');
            const info = document.getElementById('galleryInfo');
            const techTags = document.getElementById('techTags');

            // Set project info
            title.textContent = project.title;
            info.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;

            // Set technology tags
            techTags.innerHTML = project.technologies.map(tech => 
                `<span class="tech-tag">${tech}</span>`
            ).join('');

            // Create thumbnails
            createThumbnails(project.images);

            // Show first image
            updateMainImage();

            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeGallery() {
            const modal = document.getElementById('galleryModal');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        function createThumbnails(images) {
            const thumbnailContainer = document.getElementById('galleryThumbnails');
            thumbnailContainer.innerHTML = images.map((image, index) => 
                `<img class="gallery-thumbnail ${index === 0 ? 'active' : ''}" 
                      src="${image}" 
                      alt="Thumbnail ${index + 1}" 
                      data-index="${index}">`
            ).join('');

            // Add click events to thumbnails
            thumbnailContainer.querySelectorAll('.gallery-thumbnail').forEach(thumb => {
                thumb.addEventListener('click', function() {
                    currentImageIndex = parseInt(this.getAttribute('data-index'));
                    updateMainImage();
                });
            });
        }

        function updateMainImage() {
            const data = projectData[currentProject] || achievementData[currentProject];
            let images = [];
            
            // Handle photography galleries
            if (currentProject.startsWith('photo_')) {
                const category = currentProject.replace('photo_', '');
                
                if (category === 'all') {
                    images = photographyData.images.map(img => img.src);
                } else {
                    const filteredImages = photographyData.images.filter(img => 
                        img.categories.includes(category)
                    );
                    images = filteredImages.map(img => img.src);
                }
                
                // Update photo category tags when navigating
                updatePhotoTags(category, currentImageIndex);
                
            } else if (data) {
                images = data.images;
            }
            
            if (!images || images.length === 0) return;
            
            const mainImage = document.getElementById('galleryMainImage');
            const counter = document.getElementById('galleryCounter');
            const thumbnails = document.querySelectorAll('.gallery-thumbnail');
            
            // Update main image
            mainImage.src = images[currentImageIndex];
            
            // Update counter
            counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
            
            // Update thumbnail active state
            thumbnails.forEach((thumb, index) => {
                thumb.classList.toggle('active', index === currentImageIndex);
            });
        }

        function navigateGallery(direction) {
            const data = projectData[currentProject] || achievementData[currentProject];
            let images = [];
            
            // Handle photography galleries
            if (currentProject.startsWith('photo_')) {
                const category = currentProject.replace('photo_', '');
                images = photographyData[category];
            } else if (data) {
                images = data.images;
            }
            
            if (!images || images.length === 0) return;
            
            currentImageIndex += direction;
            
            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            } else if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }
            
            updateMainImage();
        }

        // Initialize animations
        function initializeAnimations() {
            // Fade in animation for pages
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe elements for animation
            const animatedElements = document.querySelectorAll('.service-item, .timeline-item, .portfolio-item');
            animatedElements.forEach((element, index) => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
                observer.observe(element);
            });
        }

        // Initialize skill bars animation
        function initializeSkillBars() {
            const skillBars = document.querySelectorAll('.skill-fill');
            
            const animateSkills = () => {
                skillBars.forEach((bar, index) => {
                    setTimeout(() => {
                        const width = bar.style.width;
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    }, index * 200);
                });
            };

            // Trigger animation when resume page is active
            document.querySelector('[data-page="resume"]').addEventListener('click', () => {
                setTimeout(animateSkills, 500);
            });

            // Trigger on page load if resume is active
            if (document.getElementById('resume').classList.contains('active')) {
                setTimeout(animateSkills, 500);
            }
        }

        // Contact form functionality
        function initializeContactForm() {
            const contactForm = document.querySelector('.contact-form form');
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const button = this.querySelector('.send-button');
                    const originalText = button.textContent;
                    
                    // Show loading state
                    button.textContent = 'Sending...';
                    button.disabled = true;
                    
                    // Simulate form submission
                    setTimeout(() => {
                        button.textContent = 'Message Sent!';
                        button.style.background = '#10b981';
                        
                        // Reset form
                        this.reset();
                        
                        // Reset button after 3 seconds
                        setTimeout(() => {
                            button.textContent = originalText;
                            button.disabled = false;
                            button.style.background = '#00d4ff';
                        }, 3000);
                    }, 2000);
                });
            }
        }

        // Photography filter functionality - Move this OUTSIDE of initializeMobileMenu
        function initializePhotographyFilter() {
            const filterTabs = document.querySelectorAll('.photo-filter-tab');
            
            filterTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const filter = this.getAttribute('data-filter');
                    
                    // Remove active class from all tabs
                    filterTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Filter and display photos
                    displayPhotos(filter);
                });
            });
            
            // Display all photos initially
            displayPhotos('all');
        }

        function displayPhotos(filter) {
            const grid = document.getElementById('photographyGrid');
            if (!grid) return;
            
            let photos = [];
            
            if (filter === 'all') {
                photos = photographyData.images.map((img, index) => ({
                    src: img.src,
                    categories: img.categories,
                    originalIndex: index
                }));
            } else {
                photos = photographyData.images
                    .map((img, index) => ({
                        src: img.src,
                        categories: img.categories,
                        originalIndex: index
                    }))
                    .filter(img => img.categories.includes(filter));
            }
            
            grid.innerHTML = photos.map((photo, index) => `
                <div class="photo-item" data-original-index="${photo.originalIndex}" data-filter-index="${index}">
                    <img src="${photo.src}" alt="${photo.categories.join(', ')} photography" loading="lazy">
                    <div class="photo-overlay">
                        <div class="photo-categories">
                            ${photo.categories.map(cat => 
                                `<span class="photo-category">${cat}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Add click events for photo gallery
            document.querySelectorAll('.photo-item').forEach(item => {
                item.addEventListener('click', function() {
                    const originalIndex = parseInt(this.getAttribute('data-original-index'));
                    openPhotoGallery(filter, originalIndex);
                });
            });
        }

        function initializePhotoGallery() {
            // This will use your existing gallery modal
            // Photos will open in the same modal as your projects
        }

        function openPhotoGallery(currentFilter, startIndex) {
            let photos = [];
            let actualStartIndex = 0;
            
            if (currentFilter === 'all') {
                photos = photographyData.images.map(img => img.src);
                actualStartIndex = startIndex;
            } else {
                // Get filtered photos and find the correct start index
                const filteredImages = photographyData.images.filter(img => 
                    img.categories.includes(currentFilter)
                );
                photos = filteredImages.map(img => img.src);
                
                // Find the position of the clicked image in the filtered array
                const originalImage = photographyData.images[startIndex];
                actualStartIndex = filteredImages.findIndex(img => img.src === originalImage.src);
            }
            
            currentProject = `photo_${currentFilter}`;
            currentImageIndex = actualStartIndex;
            
            const modal = document.getElementById('galleryModal');
            const title = document.getElementById('galleryTitle');
            const info = document.getElementById('galleryInfo');
            const techTags = document.getElementById('techTags');
            
            // Set photo gallery info
            const filterDisplayName = currentFilter === 'all' ? 'All' : 
                currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);
            
            title.textContent = `${filterDisplayName} Photography`;
            info.innerHTML = `
                <h3>${filterDisplayName} Collection</h3>
                <p>A curated selection of ${currentFilter === 'all' ? 'all' : currentFilter} photographs capturing unique moments and perspectives.</p>
            `;
            
            // Show categories as tags for current image
            updatePhotoTags(currentFilter, actualStartIndex);
            
            // Create thumbnails
            createThumbnails(photos);
            
            // Show first image
            updateMainImage();
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function updatePhotoTags(currentFilter, imageIndex) {
            const techTags = document.getElementById('techTags');
            let currentImage;
            
            if (currentFilter === 'all') {
                currentImage = photographyData.images[imageIndex];
            } else {
                const filteredImages = photographyData.images.filter(img => 
                    img.categories.includes(currentFilter)
                );
                currentImage = filteredImages[imageIndex];
            }
            
            if (currentImage) {
                techTags.innerHTML = currentImage.categories.map(category => 
                    `<span class="tech-tag">${category}</span>`
                ).join('');
            }
        }

        // Updated initializeMobileMenu function (remove the photography functions from inside)
        function initializeMobileMenu() {
            // Create mobile menu toggle button
            const navbar = document.querySelector('.navbar');
            const menuToggle = document.createElement('button');
            menuToggle.className = 'mobile-menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.style.cssText = `
                display: none;
                background: none;
                border: none;
                color: #ffffff;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 10px;
                border-radius: 5px;
            `;
            
            navbar.insertBefore(menuToggle, navbar.firstChild);
            
            // Toggle sidebar on mobile
            menuToggle.addEventListener('click', function() {
                const sidebar = document.querySelector('.sidebar');
                sidebar.classList.toggle('active');
                
                // Change icon
                this.innerHTML = sidebar.classList.contains('active') ? '✕' : '☰';
            });
            
            // Close sidebar when clicking on main content (mobile)
            document.querySelector('.main-content').addEventListener('click', function() {
                const sidebar = document.querySelector('.sidebar');
                if (sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    menuToggle.innerHTML = '☰';
                }
            });
            
            // Show/hide mobile menu toggle based on screen size
            function checkScreenSize() {
                if (window.innerWidth <= 768) {
                    menuToggle.style.display = 'block';
                } else {
                    menuToggle.style.display = 'none';
                    document.querySelector('.sidebar').classList.remove('active');
                }
            }
            
            window.addEventListener('resize', checkScreenSize);
            checkScreenSize(); 
        }

        // Mobile menu functionality
        function initializeMobileMenu() {
            // Create mobile menu toggle button
            const navbar = document.querySelector('.navbar');
            const menuToggle = document.createElement('button');
            menuToggle.className = 'mobile-menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.style.cssText = `
                display: none;
                background: none;
                border: none;
                color: #ffffff;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 10px;
                border-radius: 5px;
            `;
            
            navbar.insertBefore(menuToggle, navbar.firstChild);
            
            // Toggle sidebar on mobile
            menuToggle.addEventListener('click', function() {
                const sidebar = document.querySelector('.sidebar');
                sidebar.classList.toggle('active');
                
                // Change icon
                this.innerHTML = sidebar.classList.contains('active') ? '✕' : '☰';
            });
            
            // Close sidebar when clicking on main content (mobile)
            document.querySelector('.main-content').addEventListener('click', function() {
                const sidebar = document.querySelector('.sidebar');
                if (sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    menuToggle.innerHTML = '☰';
                }
            });
            
            // Show/hide mobile menu toggle based on screen size
            function checkScreenSize() {
                if (window.innerWidth <= 768) {
                    menuToggle.style.display = 'block';
                } else {
                    menuToggle.style.display = 'none';
                    document.querySelector('.sidebar').classList.remove('active');
                }
            }


            
            
            window.addEventListener('resize', checkScreenSize);
            checkScreenSize(); 
}