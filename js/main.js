$(document).ready(function () {
    // console.log('hello main js');

    //fetchAll 很多個
    // const navLinkList = document.querySelectorAll('.navbar .nav-link');
    // jq的寫法
    const navLinkList = $('.navbar .nav-link');
    // console.log('navLinkList', navLinkList);

    // const navbar = document.getElementById('navbar');
    const navbar = $('navbar');
    // console.log('navbar', navbar);
    // console.log('navbar.offsetHeight', navbar.offsetHeight);

    // const scrollReport = document.getElementById('scrollReport');
    const scrollReport = $('scrollReport');
    // console.log('scrollReport', scrollReport);



    //透過forEach 取出 navLinkList 所有的dom
    // console.log('55688');

    const navigationTable = {};

    //很多個 所以用forEach
    // navLinkList.forEach(value => {
    //jquery 為jquery object 需使用each()
    //w3schools misc 裡面可以查詢使用方法
    navLinkList.each(function (key) {
        //value 每一個<a>
        // console.log('value', value);

        //data-target="section1"
        //js dataset
        const sectionID = $(this).data('target');
        const sectionID = value.dataset.target;
        console.log('sectionID', sectionID);

        navigationTable[sectionID] = {
            link: $(this),
            section: $(`#${sectionID}`),
        };

        // link:
        // <a class="nav-link" data-target="section1" href="#section1">Link 1</a>
        // section:
        // <section id='section1' class="bg-warning"></section>
    });

    // console.log('navigationTable', navigationTable);



    window.addEventListener('scroll', function () {
        // console.log('window',window);
        const y = Math.round(window.scrollY + navbar.offsetHeight);
        // console.log('navbar',navbar)
        scrollReport.innerText = `目前所在的位置${y}`;
        // console.log(`目前所在的位置${y}`);

        for (const key in navigationTable) {
            // console.log('navigationTable[key]',navigationTable[key]);
            const link = navigationTable[key].link;
            const section = navigationTable[key].section;
            // console.log('link',link);
            // console.log('section',section);

            //section top
            const top = section.offsetTop;
            //section bottom
            const bottom = top + section.offsetHeight;

            if (y > top && y < bottom) {
                link.classList.add('text-warning');
                section.classList.add('is-active');
            } else {
                link.classList.remove('text-warning');
                section.classList.remove('is-active');
            }
        }

    });

});