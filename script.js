"use strict"


$(document).ready(() => {
    let bugs = [];
    const section = $(".title")
    const jobs = $(".newTitle")
    


    $(document).on("click", ".submit", (event) => {
        const bugTitle = $("input").eq(0).val();
        const bugDescript = $("input").eq(1).val();
        
        bugs.push({
            title: bugTitle,
            descript: bugDescript
        });
        section.empty();
        section.append(`
        <section class="newTitle">
            <p>Title: ${bugs[0].title}</p>
            <p>Description: ${bugs[0].descript}</p>
        </section>
        `);

    })

    // $(document).one("click", ".submit", (event) => {
    //     $(".title").append(`
    //     <p>Title: ${bugs[0].title}</p>
    //     <p>Description: ${bugs[0].descript}</p>
    // `)
    // })



    $(document).on("click", ".fa-check-circle", (event) => {
        bugs.shift();
        console.log($(".newTitle")[0]);
        console.log(section);
        section.empty();
        section.append(`
            <section class="newTitle">
                <p>Title: ${bugs[0].title}</p>
                <p>Description: ${bugs[0].descript}</p>
            </section>
        `);

    })
})