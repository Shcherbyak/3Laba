
	

$(document).ready(
    function()
    {
		
		
		
		var cache = new LastFMCache();

var lastfm = new LastFM({
apiKey : '633f6ae7cf857ec30510a835c599d939',
apiSecret : 'c04f5174828c32ab0a7c991bc13e947e',
cache : cache
});

lastfm.track.search({track  : '*', artist: 'Bon Jovi',limit : 1000}, {success: function(data){


//alert("***))"+data.results.trackmatches.track.length);

var list = '<ol>';
for (var i = 0; i < data.results.trackmatches.track.length; i++) {
    list += '<li>' + data.results.trackmatches.track[i].name + ' - '+ data.results.trackmatches.track[i].artist +'</li>';
}
document.getElementById('dv').innerHTML = list + '</ol>';
    }, error: function(code, message){
    
alert("-->>" + code);

	}});


/*
lastfm.user.getTopArtists({
    user: 'willblackmore',
    limit: 10
},
{
    success: function(data) {
        // do something
		
		var list = '<ol>';
for (var i = 0; i < data.topartists.artist.length; i++) {
    list += '<li>' + data.topartists.artist[i].name + '</li>';
}
document.getElementById('dv').innerHTML = list + '</ol>';


    },
    error: function(data) {
        alert(data.error + " " + data.message);
    }
});


/**/

/*
lastfm.artist.getInfo({artist: 'korn'}, {success: function(data){


alert("***))"+data.artist.name);

k=data.artist.similar.artist.length;

alert(k);
 


    }, error: function(code, message){
    
alert("-->>" + code);

	}});
	
/**/
/**/
	
		$('#myElement').click(function(){
			
			
				alert(1);
				$.ajax(
                    {
                        url : "http://ws.audioscrobbler.com/2.0/",
                        type: "GET",
                        dataType: 'json',
                        data : {
                            method : "track.getsimilar",
                            artist : "korn",
                            track : "blind",
                            api_key : "633f6ae7cf857ec30510a835c599d939",
                            format : "json"
                        },
                        success : function(resp)
                        {
                            var track = resp.similartracks.track;
                            $.each( track , function(index, element){
                                console.log(index);//  Порядковый номер, начиная с нуля.
                                console.log(element);//  Объект
                            });
                        },
                        error : function(){
                            alert('Непредвиденная ошибка')
                        }
                    }
                );
		});
		
		
        $('#myElement1').on(
            'click',
            function()
            {
				alert(1);
                $.ajax(
                    {
                        url : "http://ws.audioscrobbler.com/2.0/",
                        type: "GET",
                        dataType: 'json',
                        data : {
                            method : "track.getsimilar",
                            artist : "korn",
                            track : "blind",
                            api_key : "633f6ae7cf857ec30510a835c599d939",
                            format : "json"
                        },
                        success : function(resp)
                        {
                            var track = resp.similartracks.track;
                            $.each( track , function(index, element){
                                console.log(index);//  Порядковый номер, начиная с нуля.
                                console.log(element);//  Объект
                            });
                        },
                        error : function(){
                            alert('Непредвиденная ошибка')
                        }
                    }
                );
            }
        );
    }
);