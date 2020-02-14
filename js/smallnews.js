

function doNews(){   
    //document.write(articles.length);
   var divNews = $('#news');
    divNews.empty();
    
    for(var i=0; i<=smallnewsData.length -1; i++){
        
        divNews.append(
            $('<div>').addClass('row')
                    .append(
                       /* $('<p>').append(
                            smallnewsData[i].source + " [] " +
                            smallnewsData[i].title_section
                        )*/
                        $('<div>').addClass('bk1').append(
                            smallnewsData[i].source 
                            
                        ) ,
                        $('<div>').addClass('bk2').append(
                            smallnewsData[i].title_section
                        )
                    ),
            $('<div>').addClass('row2')
                    .append(
                        $('<p>').append(
                             smallnewsData[i].title
                        )
                    ),
            $('<div>').addClass('row3')
                    .append(
                        $('<p>').append(
                             smallnewsData[i].desc
                        )
                    ), 
            $('<div>').addClass('row4')
                    .append(
                        $('<p>').append(
                             smallnewsData[i].body
                        )
                    ),
             $('<div>').addClass('row5')
                    .append(
                        
                        $('<div>').addClass('bk3').append(
                            'Author' + smallnewsData[i].authors 
                            
                        ) ,
                        $('<div>').addClass('bk4').append(
                            'Editor' + smallnewsData[i].editor
                        )

                    )
         );
            
    }
    //$("img").width(100);
   // $("img").height(100);

}




