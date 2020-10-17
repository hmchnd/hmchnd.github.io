var bio = {
    name: 'Hem Chand',
    role: 'Web Developer',
    contacts: {
        mobile: '+91-9990389029',
        email: 'hmchnd@live.in',
        github: 'https://github.com/hmchnd',
        linkedin: 'https://www.linkedin.com/in/hemchandsharma/',
        location: 'Delhi'
    },
    welcomeMessage: 'Thanks for visiting my profile. I have 5+ years of experience in web application development using SAP UI5 web app framework and JavaScript.',
    skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'SAP UI5',
        'Core JAVA',
        'Android Development',
        'Website Building'
    ],
    biopic: 'images/hem.png'
};

var education = {
    schools: [{
        name: 'Northern India Engineering college (GGSIPU, Delhi)',
        location: '',
        degree: 'B.TECH',
        majors: [
            'Electronic and communications'
        ],
        dates: 2014,
    }],
    onlineCourses: [ {
        title: 'Introduction to HTML and CSS',
        school: 'Udacity',
        dates: 2015,
        url: 'http://www.udacity.com/course/ud304'
    }, {
        title: 'Responsive Web Design Fundamentals',
        school: 'Udacity',
        dates: 2015,
        url: 'http://www.udacity.com/course/ud893'
    }, {
        title: 'Responsive Images',
        school: 'Udacity',
        dates: 2015,
        url: 'http://www.udacity.com/course/ud882'
    }, {
        title: 'How to Use Git and GitHub',
        school: 'Udacity',
        dates: 2015,
        url: 'http://www.udacity.com/course/ud775'
    }, {
        title: 'JavaScript Basics',
        school: 'Udacity',
        dates: 2015,
        url: 'http://www.udacity.com/course/ud804'
    }, {
        title: 'Introduction to jQuery',
        school: 'Udacity',
        dates: 2015,
        url: 'http://www.udacity.com/course/ud245'
    }]
};

var work = {
    jobs: [{
        employer: 'Accenture',
        title: 'Senior Software Engineer',
        location: 'Gurugram, Delhi NCR',
        dates: '11/2018-present',
        description: 'Lead a team to develop complex business web application for ship management and optimization on ports using complex UI controls like Gantt chart, Chart visualization.',
        url: 'http://www.xmoppet.org'
    }, {
        employer: 'Infosys ltd.',
        title: 'SAP UI5 Consultant',
        location: 'Chandigarh',
        dates: '01/2015-11/2018',
        description: 'Worked in a team to deliver stable web application mostly using RAD Model.',
        url: 'http://www.aspect.com/'
    }]
};

var projects = {
    projects: [{
        title: 'Front-End Nanodegree Project 1: Build a Portfolio',
        dates: '04/18/2015 - 04/22/2015',
        description: 'Replicate a design mockup in a responsive website using HTML5 and CSS3.',
        url: 'https://github.com/icsantos/FEND-build-a-portfolio',
        images: [
           // 'images/fend1_laptop.jpg'
        ]
    }, {
        title: 'Front-End Nanodegree Project 2: Online Resume',
        dates: '05/07/2015 - present',
        description: 'Demonstrate mastery of JavaScript and jQuery to design an online resume.',
        url: 'https://github.com/icsantos/frontend-nanodegree-resume',
        images: [
          //  'images/fend2_laptop.jpg'
        ]
    }]
};

var icomoon = {
    contacts: {
        generic: '&#xe972;',
        mobile: '&#xe958;',
        email: '&#xea84;',
        github: '&#xeab1;',
        linkedin: '&#xea91;',
        location: '&#xe948;',
    }
};

var HTMLStrings = {
    contacts: {
        generic: HTMLcontactGeneric,
        mobile: HTMLmobile,
        email: HTMLemail,
        github: HTMLgithub,
        linkedin: HTMLlinkedin,
        location: HTMLlocation   
    }
};

bio.display = function () {
    'use strict';
    $('#topContacts').before(HTMLheaderName.replace('%data%', bio.name));
    $('#topContacts').before(HTMLheaderRole.replace('%data%', bio.role));
    var contactData,
        htmlText,
        htmlEntity,
        iconSpan,
        pos;
    Object.keys(bio.contacts).forEach(function (contactType) {
        contactData = bio.contacts[contactType];
        htmlText = HTMLStrings.contacts[contactType];
        htmlEntity = icomoon.contacts[contactType];
        iconSpan = '<span class="contact-icon">' + htmlEntity + '</span>';
        pos = htmlText.indexOf('<span class="orange-text">');
        htmlText = htmlText.replace('%data%', contactData);
        htmlText = htmlText.replace('orange-text', 'contact-text');
        htmlText = htmlText.replace('white-text', 'contact-data');
        htmlText = htmlText.slice(0, pos) + iconSpan + htmlText.slice(pos);
        $('#topContacts, #footerContacts').append(htmlText);
    });
    $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
    if (bio.skills.length > 0) {
        var formattedSkillsStart = HTMLskillsStart.replace('id="skillsH3"', 'class="skillsH3"');
        formattedSkillsStart = formattedSkillsStart.replace('class="flex-box"', 'class="skills flex-box"');
        $('#header').append(formattedSkillsStart);
        bio.skills.forEach(function (skill) {
            $('#skills').append(HTMLskills.replace('%data%', skill).replace('white-text', 'skill-data'));
        });
    }
};

education.display = function () {
    'use strict';
    var formattedSchoolName,
        formattedSchoolDegree;
    education.schools.forEach(function (school) {
        formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
        formattedSchoolName = formattedSchoolName.replace('#', school.url);
        formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
        $('.education-entry:last').append(HTMLschoolDates.replace('%data%', school.dates));
        $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', school.location));
        school.majors.forEach(function (major) {
            $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', major));
        });
    });

    if (education.onlineCourses.length > 0) {
        var formattedTitle,
            formattedSchool;
        $('#education').append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
            formattedTitle = formattedTitle.replace('#', course.url);
            formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(formattedTitle + formattedSchool);
            $('.education-entry:last').append(HTMLonlineDates.replace('%data%', course.dates));
            $('.education-entry:last').append('<br>');
        });
    }
};

work.display = function () {
    'use strict';
    var formattedWorkEmployer,
        formattedWorkTitle;
    work.jobs.forEach(function (job) {
        formattedWorkEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        formattedWorkEmployer = formattedWorkEmployer.replace('#', job.url);
        formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle);
        $('.work-entry:last').append(HTMLworkDates.replace('%data%', job.dates));
        $('.work-entry:last').append(HTMLworkLocation.replace('%data%', job.location));
        $('.work-entry:last').append(HTMLworkDescription.replace('%data%', job.description));
    });
};

projects.display = function () {
    'use strict';
    var formattedProjectTitle;
    projects.projects.forEach(function (project) {
        formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
        formattedProjectTitle = formattedProjectTitle.replace('#', project.url);
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedProjectTitle);
        $('.project-entry:last').append(HTMLprojectDates.replace('%data%', project.dates));
        $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', project.description));
        project.images.forEach(function (image) {
            $('.project-entry:last').append(HTMLprojectImage.replace('%data%', image));
        });
    });
};

$('div.dark-gray').addClass('dark-background').removeClass('dark-gray');
$('div.gray').addClass('light-background').removeClass('gray');
$('div#header').addClass('header');
$('div#letsConnect').addClass('footer');
$('div#letsConnect h2').addClass('footerh2').removeClass('orange').removeClass('center-text');
$('div#mapDiv').addClass('mapDiv').append(googleMap);
$('div#map').addClass('googleMap');

bio.display();
education.display();
work.display();
projects.display();