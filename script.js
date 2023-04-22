// FOR RESUME TAB-LINK
var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        var sidemeu = document.getElementById("sidemenu");

        function openmenu() {
            sidemeu.style.right = "0";
        }
        function closemenu() {
            sidemeu.style.right = "-200px";
        }

        const scriptURL = 'https://findingnemo.surge.sh/' // add link
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        

        // FOR COURSES SECTION

        
     let courses=[    {        
        level: "01",        
        courses: [
                   { code: "CST8101", title: "Computer Essentials", hours: 56, imgSrc : "https://img.lovepik.com/photo/50043/9777.jpg_wh860.jpg" }, 
                   { code: "CST8116", title: "Introduction to Computer Programming", hours: 70,imgSrc:"https://www.onlc.com/blog/wp-content/uploads/2017/07/ONLC-2017-4.png"},            
                   { code: "CST8215", title: "Introduction to Database", hours: 70 , imgSrc:"https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154099/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png"},            
                   { code: "ENL1813T", title: "Communications I", hours: 42 ,imgSrc:"https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/M5A2H%402x.jpg?d=500x500&f=inside "},            
                   { code: "MAT8001C", title: "Technical Mathematics for Computer Science", hours: 56 ,imgSrc:" https://img.freepik.com/free-vector/cartoon-math-word-with-math-symbols_1308-97111.jpg?size=626&ext=jpg&ga=GA1.2.302631189.1676165919&semt=ais"}        
                ]
    },
    {
        level: "02",
        courses: [
            { code: "CST2355", title: "Database Systems", hours: 56 ,imgSrc:"https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154099/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png"},
            { code: "CST8102", title: "Operating System Fundamentals (GNU/Linux)", hours: 70,imgSrc:" https://media.geeksforgeeks.org/wp-content/uploads/s2-1.jpg" },
            { code: "CST8284", title: "Object Oriented Programming (Java)", hours: 70 ,imgSrc:" https://d3m1rm8xuevz4q.cloudfront.net/wp-content/uploads/2014/10/what-is-java.png"},
            { code: "CST8285", title: "Web Programming", hours: 56 ,imgSrc:"https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/screely-1586183781361.png "},
            { code: "ENL2019T", title: "Technical Communication for Engineering Technologies", hours: 42 ,imgSrc:" https://patientengagementhit.com/images/site/article_headers/_normal/healthcare-text-messaging.jpg"},
        ]
    },
    {
        level: "03",
        courses: [
            { code: "CST2234", title: "Systems Analysis and Design", hours: 56 ,imgSrc:" https://www.cronj.com/blog/wp-content/uploads/Artboard-10.png"},
            { code: "CST2335", title: "Mobile Graphical Interface Programming", hours: 56 ,imgSrc:" https://img.freepik.com/free-psd/smartphone-screens-mockup-set_53876-98662.jpg?size=626&ext=jpg&ga=GA1.1.302631189.1676165919&semt=ais"},
            { code: "CST8109", title: "Network Programming", hours: 70 ,imgSrc:" https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-network-programming/jcr:content/Grid/category_atl_1605/layout-category-atl/anchor_info_d47d.img.png/1647337863145.png"},
            { code: "CST8288", title: "Object Oriented Programming with Design Patterns", hours: 56 ,imgSrc:" https://rockeyram.bugsandboys.com/wp-content/uploads/2021/10/procedural-programming-vs-object-oriented-programming.png"}
        ]
    },
    {
        level: "04",
        courses: [
            { code: "CST8276", title: "Advanced Database Topics", hours: 56 ,imgSrc:" https://www.insightsintoimpact.com/wp-content/uploads/2018/01/database-graphic-hi-res-300x194.jpg"},
            { code: "CST8277", title: "Enterprise Application Programming", hours: 70 ,imgSrc:"http://www.sfdcpoint.com/wp-content/uploads/2020/04/API-Full-Form.png "},
            { code: "CST8333", title: "Programming Language Research Project", hours: 56 ,imgSrc:" https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/28214113/Types-of-Research-Design.jpg"},
            { code: "CST8334", title: "Software Development Project", hours: 56 ,imgSrc:"https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg "}
        ]
    }
];

const coursesList = document.getElementById('courses-list');

// display all courses
function displayCourses(filteredCourses = courses) {
  coursesList.innerHTML = '';
  filteredCourses.forEach((level) => {
    level.courses.forEach((course) => {
      const li = document.createElement('li');
      li.innerHTML = `<img class="course-image" src="${course.imgSrc}" alt="${course.title}"> <strong>${course.code}:</strong> ${course.title} (${course.hours} hours)`;
      coursesList.appendChild(li);
    });
  });
}


// Search bar for searching of specific course 

function searchCourses() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const filteredCourses = courses.flatMap((level) => {
    return level.courses.filter((course) => {
      return course.title.toLowerCase().includes(searchTerm) || course.code.toLowerCase().includes(searchTerm);
    }).map((course) => {
      return {
        level: level.level,
        courses: [course]
      };
    });
  });
  displayCourses(filteredCourses);
}

// filter courses by its level

function filterCourses() {
  const levelFilter = document.getElementById('level').value;
  if (!levelFilter) {
    displayCourses(courses);
  } else {
    const filteredCourses = courses.filter((level) => {
      return level.level === levelFilter;
    });
    displayCourses(filteredCourses);
  }
}

//sort by level from lowest to highest and vice versa

function sortCourses() {
  const sortDirection = document.getElementById('sort').value;
  const sortedCourses = courses.map((level) => {
  return {
    level: level.level,
    courses: level.courses.sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.hours - b.hours;
      } else if (sortDirection === 'desc') {
        return b.hours - a.hours;
      } else {
        return 0;
      }
    })
  };
});
  displayCourses(sortedCourses);
}

// default to show all course
displayCourses(courses);
