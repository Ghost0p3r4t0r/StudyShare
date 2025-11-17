// StudyShare - Online Resource Sharing Platform
class StudyShare {
    constructor() {
        this.currentUser = null;
        this.resources = [];
        this.users = [];
        this.subjects = [];
        this.branches = [];
        this.semesters = [];
        this.fileTypes = [];
        this.theme = localStorage.getItem('theme') || 'light';
        this.selectedFile = null;
        this.init();
    }

    init() {
        this.loadSampleData();
        this.setupEventListeners();
        this.applyTheme();
        this.checkAuthState();
    }

    loadSampleData() {
        // Sample data from the provided JSON
        this.users = [
            {
                id: 1,
                name: "Alex Johnson",
                email: "alex@university.edu",
                college: "Tech University",
                branch: "Computer Science",
                semester: 6,
                uploads: [1, 2, 5]
            },
            {
                id: 2,
                name: "Priya Sharma",
                email: "priya@college.edu",
                college: "Engineering College",
                branch: "Electronics",
                semester: 4,
                uploads: [3, 7]
            },
            {
                id: 3,
                name: "Mike Chen",
                email: "mike@tech.edu",
                college: "State University",
                branch: "Mechanical",
                semester: 8,
                uploads: [4, 6, 8]
            }
        ];

        this.resources = [
            {
                id: 1,
                title: "Data Structures Complete Notes",
                description: "Comprehensive notes covering arrays, linked lists, trees, graphs, and algorithms with examples",
                tags: ["data-structures", "algorithms", "programming", "notes"],
                subject: "Data Structures & Algorithms",
                semester: 3,
                branch: "Computer Science",
                fileType: "PDF",
                uploadDate: "2025-08-20",
                uploader: 1,
                uploaderName: "Alex Johnson",
                ratings: [5, 4, 5, 4, 5],
                avgRating: 4.6,
                comments: [
                    {user: "Sarah", text: "Excellent notes! Very detailed explanations.", date: "2025-08-25"},
                    {user: "John", text: "Helped me ace my exam. Thanks for sharing!", date: "2025-08-24"}
                ],
                downloads: 156,
                isPublic: true,
                fileSize: "2.5 MB"
            },
            {
                id: 2,
                title: "Operating Systems Mid-term Question Paper 2024",
                description: "Previous year question paper with solutions for operating systems course",
                tags: ["question-paper", "operating-systems", "midterm", "solutions"],
                subject: "Operating Systems",
                semester: 4,
                branch: "Computer Science",
                fileType: "PDF",
                uploadDate: "2025-08-18",
                uploader: 1,
                uploaderName: "Alex Johnson",
                ratings: [4, 5, 4, 4],
                avgRating: 4.25,
                comments: [
                    {user: "Emma", text: "Great for exam preparation!", date: "2025-08-22"}
                ],
                downloads: 89,
                isPublic: true,
                fileSize: "1.2 MB"
            },
            {
                id: 3,
                title: "Digital Electronics Lab Manual",
                description: "Complete lab manual with circuit diagrams and practical implementations",
                tags: ["lab-manual", "digital-electronics", "circuits", "practical"],
                subject: "Digital Electronics",
                semester: 3,
                branch: "Electronics",
                fileType: "PDF",
                uploadDate: "2025-08-15",
                uploader: 2,
                uploaderName: "Priya Sharma",
                ratings: [5, 5, 4, 5, 4],
                avgRating: 4.6,
                comments: [],
                downloads: 134,
                isPublic: true,
                fileSize: "4.1 MB"
            },
            {
                id: 4,
                title: "Thermodynamics Presentation - Heat Engines",
                description: "Detailed presentation on heat engines, efficiency, and thermodynamic cycles",
                tags: ["thermodynamics", "heat-engines", "presentation", "cycles"],
                subject: "Thermodynamics",
                semester: 5,
                branch: "Mechanical",
                fileType: "PPT",
                uploadDate: "2025-08-12",
                uploader: 3,
                uploaderName: "Mike Chen",
                ratings: [4, 4, 5, 4],
                avgRating: 4.25,
                comments: [
                    {user: "Lisa", text: "Clear explanations with good diagrams", date: "2025-08-20"}
                ],
                downloads: 67,
                isPublic: true,
                fileSize: "5.8 MB"
            },
            {
                id: 5,
                title: "Machine Learning Project Report",
                description: "Final year project on sentiment analysis using deep learning techniques",
                tags: ["machine-learning", "project", "deep-learning", "sentiment-analysis"],
                subject: "Machine Learning",
                semester: 7,
                branch: "Computer Science",
                fileType: "DOCX",
                uploadDate: "2025-08-10",
                uploader: 1,
                uploaderName: "Alex Johnson",
                ratings: [5, 4, 5, 5, 4],
                avgRating: 4.6,
                comments: [
                    {user: "David", text: "Impressive work! Great reference for ML projects", date: "2025-08-18"}
                ],
                downloads: 92,
                isPublic: true,
                fileSize: "3.2 MB"
            },
            {
                id: 6,
                title: "Fluid Mechanics Formula Sheet",
                description: "Quick reference sheet with all important formulas and derivations",
                tags: ["formula-sheet", "fluid-mechanics", "reference", "quick-guide"],
                subject: "Fluid Mechanics",
                semester: 6,
                branch: "Mechanical",
                fileType: "PDF",
                uploadDate: "2025-08-08",
                uploader: 3,
                uploaderName: "Mike Chen",
                ratings: [5, 5, 5, 4, 5],
                avgRating: 4.8,
                comments: [
                    {user: "Anna", text: "Perfect for quick revision!", date: "2025-08-15"}
                ],
                downloads: 203,
                isPublic: true,
                fileSize: "0.8 MB"
            },
            {
                id: 7,
                title: "Microprocessor Architecture Notes",
                description: "Detailed notes on 8085 and 8086 microprocessor architecture with programming examples",
                tags: ["microprocessor", "8085", "8086", "architecture", "programming"],
                subject: "Microprocessors",
                semester: 5,
                branch: "Electronics",
                fileType: "PDF",
                uploadDate: "2025-08-05",
                uploader: 2,
                uploaderName: "Priya Sharma",
                ratings: [4, 5, 4, 5, 4],
                avgRating: 4.4,
                comments: [
                    {user: "Tom", text: "Very helpful for understanding assembly programming", date: "2025-08-12"}
                ],
                downloads: 145,
                isPublic: true,
                fileSize: "3.7 MB"
            },
            {
                id: 8,
                title: "CAD Drawing Samples - Mechanical Parts",
                description: "Collection of CAD drawings for various mechanical parts and assemblies",
                tags: ["cad", "drawings", "mechanical", "parts", "design"],
                subject: "Computer Aided Design",
                semester: 4,
                branch: "Mechanical",
                fileType: "PDF",
                uploadDate: "2025-08-02",
                uploader: 3,
                uploaderName: "Mike Chen",
                ratings: [4, 4, 5, 4, 4],
                avgRating: 4.2,
                comments: [],
                downloads: 78,
                isPublic: true,
                fileSize: "6.2 MB"
            }
        ];

        this.subjects = [
            "Data Structures & Algorithms", "Operating Systems", "Digital Electronics",
            "Thermodynamics", "Machine Learning", "Fluid Mechanics", "Microprocessors",
            "Computer Aided Design", "Database Management", "Software Engineering",
            "Computer Networks", "Artificial Intelligence", "Control Systems",
            "Power Electronics", "Engineering Mathematics", "Physics", "Chemistry"
        ];

        this.branches = [
            "Computer Science", "Electronics", "Mechanical", "Civil",
            "Electrical", "Chemical", "Aerospace"
        ];

        this.semesters = [1, 2, 3, 4, 5, 6, 7, 8];
        this.fileTypes = ["PDF", "DOCX", "PPT", "XLSX", "TXT", "JPG", "PNG"];
    }

    setupEventListeners() {
        // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        const mobileOverlay = document.getElementById('mobile-overlay');
        const closeSidebar = document.getElementById('close-sidebar');

        if (menuToggle) {
            menuToggle.addEventListener('click', (e) => {
                e.preventDefault();
                sidebar.classList.add('open');
                mobileOverlay.classList.add('show');
            });
        }

        if (closeSidebar) {
            closeSidebar.addEventListener('click', (e) => {
                e.preventDefault();
                sidebar.classList.remove('open');
                mobileOverlay.classList.remove('show');
            });
        }

        if (mobileOverlay) {
            mobileOverlay.addEventListener('click', () => {
                sidebar.classList.remove('open');
                mobileOverlay.classList.remove('show');
            });
        }

        // Form submissions
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        const registerForm = document.getElementById('register-form');
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRegister();
            });
        }

        const uploadForm = document.getElementById('upload-form');
        if (uploadForm) {
            uploadForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleUpload();
            });
        }

        const editProfileForm = document.getElementById('edit-profile-form');
        if (editProfileForm) {
            editProfileForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleProfileUpdate();
            });
        }

        // File upload handling
        const fileInput = document.getElementById('file-input');
        const dropZone = document.getElementById('drop-zone');

        if (dropZone && fileInput) {
            dropZone.addEventListener('click', () => fileInput.click());
            fileInput.addEventListener('change', (e) => this.handleFileSelect(e.target.files));

            // Drag and drop
            dropZone.addEventListener('dragover', (e) => {
                e.preventDefault();
                dropZone.classList.add('drag-over');
            });

            dropZone.addEventListener('dragleave', () => {
                dropZone.classList.remove('drag-over');
            });

            dropZone.addEventListener('drop', (e) => {
                e.preventDefault();
                dropZone.classList.remove('drag-over');
                this.handleFileSelect(e.dataTransfer.files);
            });
        }

        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', () => this.performSearch());
        }

        // Filter changes
        ['filter-subject', 'filter-branch', 'filter-semester'].forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('change', () => this.performSearch());
            }
        });

        // Modal event listeners
        this.setupModalEventListeners();

        // Populate dropdowns
        this.populateDropdowns();
    }

    setupModalEventListeners() {
        // Modal close on overlay click
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                e.stopPropagation();
                const modal = overlay.closest('.modal');
                if (modal) {
                    modal.classList.add('hidden');
                }
            });
        });

        // Prevent modal content clicks from closing modal
        document.querySelectorAll('.modal-content').forEach(content => {
            content.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });

        // Close buttons
        document.querySelectorAll('.modal-close').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const modal = button.closest('.modal');
                if (modal) {
                    modal.classList.add('hidden');
                }
            });
        });

        // Escape key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal:not(.hidden)').forEach(modal => {
                    modal.classList.add('hidden');
                });
            }
        });
    }

    populateDropdowns() {
        // Populate all subject dropdowns
        const subjectSelects = ['resource-subject', 'filter-subject'];
        subjectSelects.forEach(id => {
            const select = document.getElementById(id);
            if (select) {
                select.innerHTML = id.includes('filter') ? '<option value="">All Subjects</option>' : '<option value="">Select Subject</option>';
                this.subjects.forEach(subject => {
                    select.innerHTML += `<option value="${subject}">${subject}</option>`;
                });
            }
        });

        // Populate all branch dropdowns
        const branchSelects = ['resource-branch', 'register-branch', 'edit-branch', 'filter-branch'];
        branchSelects.forEach(id => {
            const select = document.getElementById(id);
            if (select) {
                select.innerHTML = id.includes('filter') ? '<option value="">All Branches</option>' : '<option value="">Select Branch</option>';
                this.branches.forEach(branch => {
                    select.innerHTML += `<option value="${branch}">${branch}</option>`;
                });
            }
        });

        // Populate all semester dropdowns
        const semesterSelects = ['resource-semester', 'register-semester', 'edit-semester', 'filter-semester'];
        semesterSelects.forEach(id => {
            const select = document.getElementById(id);
            if (select) {
                select.innerHTML = id.includes('filter') ? '<option value="">All Semesters</option>' : '<option value="">Select Semester</option>';
                this.semesters.forEach(semester => {
                    select.innerHTML += `<option value="${semester}">Semester ${semester}</option>`;
                });
            }
        });
    }

    checkAuthState() {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.showApp();
        } else {
            this.showLanding();
        }
    }

    showLanding() {
        const landingPage = document.getElementById('landing-page');
        const app = document.getElementById('app');
        if (landingPage) landingPage.classList.remove('hidden');
        if (app) app.classList.add('hidden');
    }

    showApp() {
        const landingPage = document.getElementById('landing-page');
        const app = document.getElementById('app');
        if (landingPage) landingPage.classList.add('hidden');
        if (app) app.classList.remove('hidden');
        this.updateUserDisplay();
        this.showSection('home');
    }

    handleLogin() {
        const emailInput = document.getElementById('login-email');
        const passwordInput = document.getElementById('login-password');
        
        if (!emailInput || !passwordInput) return;

        const email = emailInput.value;
        const password = passwordInput.value;

        // Simple authentication simulation
        const user = this.users.find(u => u.email === email);
        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.closeModal('login-modal');
            this.showApp();
            this.showToast('Login successful!', 'success');
        } else {
            this.showToast('Invalid credentials. Try alex@university.edu', 'error');
        }
    }

    handleRegister() {
        const formData = {
            name: document.getElementById('register-name')?.value || '',
            email: document.getElementById('register-email')?.value || '',
            college: document.getElementById('register-college')?.value || '',
            branch: document.getElementById('register-branch')?.value || '',
            semester: parseInt(document.getElementById('register-semester')?.value || '1'),
            password: document.getElementById('register-password')?.value || ''
        };

        // Check if user already exists
        if (this.users.find(u => u.email === formData.email)) {
            this.showToast('User already exists!', 'error');
            return;
        }

        // Create new user
        const newUser = {
            id: this.users.length + 1,
            ...formData,
            uploads: []
        };

        this.users.push(newUser);
        this.currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        
        this.closeModal('register-modal');
        this.showApp();
        this.showToast('Account created successfully!', 'success');
    }

    handleFileSelect(files) {
        if (!files || files.length === 0) return;

        const file = files[0];
        const maxSize = 10 * 1024 * 1024; // 10MB

        if (file.size > maxSize) {
            this.showToast('File size must be less than 10MB', 'error');
            return;
        }

        const allowedTypes = ['pdf', 'docx', 'ppt', 'pptx', 'jpg', 'jpeg', 'png', 'txt', 'xlsx'];
        const fileExtension = file.name.split('.').pop().toLowerCase();

        if (!allowedTypes.includes(fileExtension)) {
            this.showToast('File type not supported', 'error');
            return;
        }

        // Show file preview
        const filePreview = document.getElementById('file-preview');
        const fileName = document.getElementById('file-name');
        
        if (fileName) fileName.textContent = file.name;
        if (filePreview) filePreview.classList.remove('hidden');
        
        // Store file reference
        this.selectedFile = file;
    }

    handleUpload() {
        if (!this.selectedFile) {
            this.showToast('Please select a file first', 'error');
            return;
        }

        const formData = {
            title: document.getElementById('resource-title')?.value || '',
            description: document.getElementById('resource-description')?.value || '',
            subject: document.getElementById('resource-subject')?.value || '',
            branch: document.getElementById('resource-branch')?.value || '',
            semester: parseInt(document.getElementById('resource-semester')?.value || '1'),
            tags: (document.getElementById('resource-tags')?.value || '').split(',').map(tag => tag.trim()).filter(tag => tag),
            isPublic: document.getElementById('resource-visibility')?.value === 'true'
        };

        // Create new resource
        const newResource = {
            id: this.resources.length + 1,
            ...formData,
            fileType: this.selectedFile.name.split('.').pop().toUpperCase(),
            uploadDate: new Date().toISOString().split('T')[0],
            uploader: this.currentUser.id,
            uploaderName: this.currentUser.name,
            ratings: [],
            avgRating: 0,
            comments: [],
            downloads: 0,
            fileSize: this.formatFileSize(this.selectedFile.size)
        };

        this.resources.push(newResource);
        this.currentUser.uploads.push(newResource.id);

        // Reset form
        const uploadForm = document.getElementById('upload-form');
        if (uploadForm) uploadForm.reset();
        
        const filePreview = document.getElementById('file-preview');
        if (filePreview) filePreview.classList.add('hidden');
        
        this.selectedFile = null;

        this.showToast('Resource uploaded successfully!', 'success');
        this.showSection('home');
    }

    handleProfileUpdate() {
        if (!this.currentUser) return;

        this.currentUser.name = document.getElementById('edit-name')?.value || this.currentUser.name;
        this.currentUser.college = document.getElementById('edit-college')?.value || this.currentUser.college;
        this.currentUser.branch = document.getElementById('edit-branch')?.value || this.currentUser.branch;
        this.currentUser.semester = parseInt(document.getElementById('edit-semester')?.value || this.currentUser.semester);

        // Update in users array
        const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
        if (userIndex > -1) {
            this.users[userIndex] = {...this.currentUser};
        }

        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        
        this.closeModal('edit-profile-modal');
        this.loadProfile();
        this.updateUserDisplay();
        this.showToast('Profile updated successfully!', 'success');
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    }

    performSearch() {
        const searchInput = document.getElementById('search-input');
        const subjectFilter = document.getElementById('filter-subject');
        const branchFilter = document.getElementById('filter-branch');
        const semesterFilter = document.getElementById('filter-semester');

        const query = searchInput?.value.toLowerCase() || '';
        const subjectFilterValue = subjectFilter?.value || '';
        const branchFilterValue = branchFilter?.value || '';
        const semesterFilterValue = semesterFilter?.value || '';

        let filteredResources = this.resources.filter(resource => {
            const matchesQuery = !query || 
                resource.title.toLowerCase().includes(query) ||
                resource.description.toLowerCase().includes(query) ||
                resource.tags.some(tag => tag.toLowerCase().includes(query));

            const matchesSubject = !subjectFilterValue || resource.subject === subjectFilterValue;
            const matchesBranch = !branchFilterValue || resource.branch === branchFilterValue;
            const matchesSemester = !semesterFilterValue || resource.semester.toString() === semesterFilterValue;

            return matchesQuery && matchesSubject && matchesBranch && matchesSemester && resource.isPublic;
        });

        this.displaySearchResults(filteredResources);
    }

    displaySearchResults(resources) {
        const container = document.getElementById('search-results');
        const countElement = document.getElementById('search-results-count');
        
        if (countElement) {
            countElement.textContent = `${resources.length} resource${resources.length !== 1 ? 's' : ''} found`;
        }

        if (!container) return;

        if (resources.length === 0) {
            container.innerHTML = `
                <div class="col-span-full empty-state">
                    <i class="fas fa-search empty-state__icon"></i>
                    <h4 class="empty-state__title">No resources found</h4>
                    <p class="empty-state__description">Try adjusting your search criteria or browse all resources.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = resources.map(resource => this.createResourceCard(resource)).join('');
    }

    createResourceCard(resource) {
        if (!resource) return '';

        const fileIcon = this.getFileIcon(resource.fileType);
        const stars = this.generateStars(resource.avgRating);

        return `
            <div class="resource-card" onclick="showResourceDetails(${resource.id})" tabindex="0">
                <div class="resource-card__header">
                    <div class="flex items-center mb-3">
                        <div class="file-icon file-icon--${resource.fileType.toLowerCase()}">
                            <i class="${fileIcon}"></i>
                        </div>
                        <div class="ml-3 flex-1">
                            <h4 class="text-lg font-semibold text-text line-clamp-2">${resource.title}</h4>
                            <p class="text-sm text-text-secondary">${resource.subject}</p>
                        </div>
                    </div>
                </div>
                <div class="resource-card__body">
                    <p class="text-sm text-text-secondary mb-3 line-clamp-2">${resource.description}</p>
                    <div class="flex flex-wrap gap-1 mb-3">
                        ${resource.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                        ${resource.tags.length > 3 ? `<span class="tag">+${resource.tags.length - 3}</span>` : ''}
                    </div>
                </div>
                <div class="resource-card__footer">
                    <div class="flex items-center justify-between text-sm">
                        <div class="flex items-center gap-4">
                            <div class="rating">
                                <div class="rating__stars">${stars}</div>
                                <span class="text-text-secondary">(${resource.ratings.length})</span>
                            </div>
                            <span class="text-text-secondary">
                                <i class="fas fa-download mr-1"></i>${resource.downloads}
                            </span>
                        </div>
                        <div class="flex items-center gap-2 text-text-secondary">
                            <span>Sem ${resource.semester}</span>
                            <span>•</span>
                            <span>${resource.fileSize}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getFileIcon(fileType) {
        const icons = {
            'PDF': 'fas fa-file-pdf',
            'DOCX': 'fas fa-file-word',
            'PPT': 'fas fa-file-powerpoint',
            'PPTX': 'fas fa-file-powerpoint',
            'XLSX': 'fas fa-file-excel',
            'TXT': 'fas fa-file-alt',
            'JPG': 'fas fa-file-image',
            'JPEG': 'fas fa-file-image',
            'PNG': 'fas fa-file-image'
        };
        return icons[fileType] || 'fas fa-file';
    }

    generateStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<i class="fas fa-star rating__star"></i>';
            } else if (i - 0.5 <= rating) {
                stars += '<i class="fas fa-star-half-alt rating__star"></i>';
            } else {
                stars += '<i class="far fa-star rating__star--empty"></i>';
            }
        }
        return stars;
    }

    showSection(sectionName) {
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        const navItem = document.querySelector(`[data-section="${sectionName}"]`);
        if (navItem) navItem.classList.add('active');

        // Update sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(`${sectionName}-section`);
        if (targetSection) targetSection.classList.add('active');

        // Update page title
        const titles = {
            'home': 'Dashboard',
            'upload': 'Upload Resource',
            'search': 'Search Resources',
            'profile': 'My Profile'
        };
        const pageTitle = document.getElementById('page-title');
        if (pageTitle) pageTitle.textContent = titles[sectionName] || sectionName;

        // Load section-specific content
        switch (sectionName) {
            case 'home':
                this.loadDashboard();
                break;
            case 'search':
                this.performSearch();
                break;
            case 'profile':
                this.loadProfile();
                break;
        }

        // Close mobile sidebar
        const sidebar = document.getElementById('sidebar');
        const mobileOverlay = document.getElementById('mobile-overlay');
        if (sidebar) sidebar.classList.remove('open');
        if (mobileOverlay) mobileOverlay.classList.remove('show');
    }

    loadDashboard() {
        // Update stats
        const totalResourcesEl = document.getElementById('total-resources');
        if (totalResourcesEl) totalResourcesEl.textContent = this.resources.length;
        
        const totalDownloads = this.resources.reduce((sum, resource) => sum + resource.downloads, 0);
        const totalDownloadsEl = document.getElementById('total-downloads');
        if (totalDownloadsEl) totalDownloadsEl.textContent = totalDownloads;

        // Load trending resources (top by downloads)
        const trending = [...this.resources]
            .filter(r => r.isPublic)
            .sort((a, b) => b.downloads - a.downloads)
            .slice(0, 6);
        
        const trendingContainer = document.getElementById('trending-resources');
        if (trendingContainer) {
            trendingContainer.innerHTML = trending.map(resource => this.createResourceCard(resource)).join('');
        }

        // Load recent resources
        const recent = [...this.resources]
            .filter(r => r.isPublic)
            .sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate))
            .slice(0, 6);
        
        const recentContainer = document.getElementById('recent-resources');
        if (recentContainer) {
            recentContainer.innerHTML = recent.map(resource => this.createResourceCard(resource)).join('');
        }
    }

    loadProfile() {
        if (!this.currentUser) return;

        // Update profile information
        const profileElements = {
            'profile-name': this.currentUser.name,
            'profile-email': this.currentUser.email,
            'profile-college': this.currentUser.college,
            'profile-branch': this.currentUser.branch,
            'profile-semester': `Semester ${this.currentUser.semester}`
        };

        Object.entries(profileElements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        });

        // Load user uploads
        const userUploads = this.resources.filter(r => r.uploader === this.currentUser.id);
        const uploadsContainer = document.getElementById('user-uploads');

        if (!uploadsContainer) return;

        if (userUploads.length === 0) {
            uploadsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-upload empty-state__icon"></i>
                    <h4 class="empty-state__title">No uploads yet</h4>
                    <p class="empty-state__description">Share your first resource with the community!</p>
                </div>
            `;
            return;
        }

        uploadsContainer.innerHTML = userUploads.map(resource => `
            <div class="upload-item">
                <div class="upload-item__info">
                    <div class="upload-item__icon file-icon--${resource.fileType.toLowerCase()}">
                        <i class="${this.getFileIcon(resource.fileType)}"></i>
                    </div>
                    <div class="upload-item__details">
                        <h5>${resource.title}</h5>
                        <p>${resource.subject} • ${resource.downloads} downloads • ${this.generateStars(resource.avgRating)}</p>
                    </div>
                </div>
                <div class="upload-item__actions">
                    <button onclick="showResourceDetails(${resource.id})" class="btn btn--sm btn--outline">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button onclick="deleteResource(${resource.id})" class="btn btn--sm" style="background-color: var(--color-error); color: white;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    updateUserDisplay() {
        if (this.currentUser) {
            const userDisplayName = document.getElementById('user-display-name');
            if (userDisplayName) {
                userDisplayName.textContent = `Welcome, ${this.currentUser.name}!`;
            }
        }
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('hidden');
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('hidden');
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        
        const icon = type === 'success' ? 'check-circle' : 
                    type === 'error' ? 'exclamation-circle' :
                    type === 'warning' ? 'exclamation-triangle' : 'info-circle';
        
        toast.innerHTML = `
            <i class="fas fa-${icon}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-color-scheme', this.theme);
        const themeIcon = document.querySelector('.theme-toggle i');
        if (themeIcon) {
            themeIcon.className = this.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        this.showLanding();
        this.showToast('Logged out successfully', 'info');
    }
}

// Global functions for HTML onclick handlers
let app;

function showLoginModal() {
    if (app) app.showModal('login-modal');
}

function showRegisterModal() {
    if (app) app.showModal('register-modal');
}

function showSection(section) {
    if (app) app.showSection(section);
}

function toggleTheme() {
    if (app) app.toggleTheme();
}

function logout() {
    if (app) app.logout();
}

function closeModal(modalId) {
    if (app) app.closeModal(modalId);
}

function removeFile() {
    if (app) {
        app.selectedFile = null;
        const filePreview = document.getElementById('file-preview');
        if (filePreview) filePreview.classList.add('hidden');
    }
}

function clearFilters() {
    const elements = ['search-input', 'filter-subject', 'filter-branch', 'filter-semester'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = '';
    });
    if (app) app.performSearch();
}

function showResourceDetails(resourceId) {
    if (!app) return;
    
    const resource = app.resources.find(r => r.id === resourceId);
    if (!resource) return;

    const modal = document.getElementById('resource-modal');
    const title = document.getElementById('resource-modal-title');
    const content = document.getElementById('resource-modal-content');

    if (title) title.textContent = resource.title;

    const stars = app.generateStars(resource.avgRating);
    const tags = resource.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    if (content) {
        content.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2">
                    <div class="mb-6">
                        <div class="flex items-center mb-4">
                            <div class="file-icon file-icon--${resource.fileType.toLowerCase()}">
                                <i class="${app.getFileIcon(resource.fileType)}"></i>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-semibold">${resource.title}</h4>
                                <p class="text-text-secondary">${resource.subject}</p>
                            </div>
                        </div>
                        
                        <p class="text-text-secondary mb-4">${resource.description}</p>
                        
                        <div class="flex flex-wrap gap-2 mb-4">${tags}</div>
                        
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                                <span class="text-text-secondary">Branch:</span>
                                <div class="font-medium">${resource.branch}</div>
                            </div>
                            <div>
                                <span class="text-text-secondary">Semester:</span>
                                <div class="font-medium">${resource.semester}</div>
                            </div>
                            <div>
                                <span class="text-text-secondary">File Size:</span>
                                <div class="font-medium">${resource.fileSize}</div>
                            </div>
                            <div>
                                <span class="text-text-secondary">Downloads:</span>
                                <div class="font-medium">${resource.downloads}</div>
                            </div>
                        </div>
                    </div>

                    ${resource.comments.length > 0 ? `
                    <div class="mb-6">
                        <h5 class="text-lg font-semibold mb-4">Comments</h5>
                        ${resource.comments.map(comment => `
                            <div class="comment">
                                <div class="comment__header flex justify-between items-center">
                                    <span class="comment__author">${comment.user}</span>
                                    <span class="comment__date">${comment.date}</span>
                                </div>
                                <p class="comment__text">${comment.text}</p>
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
                
                <div>
                    <div class="card">
                        <div class="card__body">
                            <div class="text-center mb-4">
                                <div class="rating mb-2">
                                    <div class="rating__stars">${stars}</div>
                                </div>
                                <p class="text-2xl font-bold">${resource.avgRating.toFixed(1)}</p>
                                <p class="text-text-secondary">Based on ${resource.ratings.length} rating${resource.ratings.length !== 1 ? 's' : ''}</p>
                            </div>
                            
                            <div class="space-y-3 mb-6">
                                <button onclick="downloadResource(${resource.id})" class="btn btn--primary btn--full-width">
                                    <i class="fas fa-download mr-2"></i>Download
                                </button>
                                <button onclick="shareResource(${resource.id})" class="btn btn--outline btn--full-width">
                                    <i class="fas fa-share mr-2"></i>Share
                                </button>
                            </div>
                            
                            <div class="text-sm text-text-secondary space-y-2">
                                <div class="flex justify-between">
                                    <span>Uploaded by:</span>
                                    <span class="font-medium">${resource.uploaderName}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Upload date:</span>
                                    <span class="font-medium">${new Date(resource.uploadDate).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    app.showModal('resource-modal');
}

function downloadResource(resourceId) {
    if (!app) return;
    
    const resource = app.resources.find(r => r.id === resourceId);
    if (resource) {
        resource.downloads++;
        app.showToast(`Downloading ${resource.title}...`, 'success');
        app.closeModal('resource-modal');
    }
}

function shareResource(resourceId) {
    if (!app) return;
    
    const resource = app.resources.find(r => r.id === resourceId);
    if (resource) {
        const shareUrl = `${window.location.origin}?resource=${resourceId}`;
        navigator.clipboard.writeText(shareUrl).then(() => {
            app.showToast('Share link copied to clipboard!', 'success');
        }).catch(() => {
            app.showToast('Share link: ' + shareUrl, 'info');
        });
    }
}

function deleteResource(resourceId) {
    if (!app) return;
    
    if (confirm('Are you sure you want to delete this resource?')) {
        const resourceIndex = app.resources.findIndex(r => r.id === resourceId);
        if (resourceIndex > -1) {
            app.resources.splice(resourceIndex, 1);
            if (app.currentUser) {
                app.currentUser.uploads = app.currentUser.uploads.filter(id => id !== resourceId);
            }
            app.loadProfile();
            app.showToast('Resource deleted successfully', 'success');
        }
    }
}

function showEditProfileModal() {
    if (!app || !app.currentUser) return;
    
    // Pre-fill form
    const formElements = {
        'edit-name': app.currentUser.name,
        'edit-college': app.currentUser.college,
        'edit-branch': app.currentUser.branch,
        'edit-semester': app.currentUser.semester
    };

    Object.entries(formElements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.value = value;
    });
    
    app.showModal('edit-profile-modal');
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    app = new StudyShare();
});