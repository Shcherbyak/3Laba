var cache;
var lastfm;


function getartistTopTracks(artistname)
{

	
	lastfm.artist.getTopTracks({artist: artistname, limit: 10}, {success: function(data){


		//alert("***))"+data.artist.name);
	textout="<p><b>TorTracks</b></p>";
		k=data.toptracks.track.length;

			list="<ol>\n";
		for (i=0; i<data.toptracks.track.length; i++)
			{
				list+="<li>"+data.toptracks.track[i].name+"</li>\n";
				
			}

		textout+=list+"</ol\>"
		
			$("#artinfo").append(textout);

			}, error: function(code, message){
			
		alert("-->>" + code);

	}});
	
}

function getartistinfo(artistname)
{

	
	lastfm.artist.getInfo({artist: artistname}, {success: function(data){


		//alert("***))"+data.artist.name);

		artsum="<h2>"+artistname+"</h2>"+data.artist.bio.content;
	
		
		//artsum+=t;
		
		$("#artinfo").html(artsum);

		//-------------------------------------------------- get top tracks


		
		var plcnt = new Array();
		var trcks = new Array();
		var lscnt = new Array();
		
		lastfm.artist.getTopTracks({artist: artistname, limit: 10}, {success: function(data){


		//alert("***))"+data.artist.name);
		textout="<p><b>TorTracks</b></p>";
				list="<ol>\n";
				
			for (i=0; i<data.toptracks.track.length; i++)
				{
					list+="<li>"+data.toptracks.track[i].name+"</li>\n";
					
					nm=data.toptracks.track[i].name;
					cnt=data.toptracks.track[i].playcount/1000;
					lcnt=data.toptracks.track[i].listeners/1000;
					plcnt[i]={name: nm, 
							y: cnt};
							
							
					trcks[i]= nm;
					lscnt[i]=lcnt;
					
				}

			textout+=list+"</ol\>"
			
				$("#artinfo").append(textout);
				$("#artinfo").append("<div id=\"container\" style=\"min-width: 310px; height: 400px; margin: 0 auto\"></div>");
				$("#artinfo").append("<div id=\"container1\" style=\"min-width: 310px; height: 400px; margin: 0 auto\"></div>");
				
			
							
							
				$('#container').highcharts({
					chart: {
						plotBackgroundColor: null,
						plotBorderWidth: null,
						plotShadow: false,
						type: 'pie'
					},
					title: {
						text: 'PlayCount Information'
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
					},
					plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: 'pointer',
							dataLabels: {
								enabled: true,
								format: '<b>{point.name}</b>: {point.percentage:.1f} %',
								style: {
									color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
								}
							}
						}
					},
					series: [{
						name: "Brands",
						colorByPoint: true,
						data: plcnt
					}]
				});
							
					
			   $('#container1').highcharts({
					chart: {
						type: 'column'
					},
					title: {
						text: 'Count of Lisseners'
					},
					xAxis: {
						categories: trcks
					},
					credits: {
						enabled: false
					},
					series: [{
						name: 'Lisseners (*1000)',
						data: lscnt
					}]
				});					
										
							

				}, error: function(code, message){
				
			alert("-->>" + code);

		}});

		//-------------------------------------------------- end get top tracks
			}, error: function(code, message){
			
		alert("-->>" + code);

	}});
	
}

function getgeochart(contryname)
{
	
		$("#artinfo").html("");
		lastfm.geo.getTopArtists({country : contryname}, {success: function(data){


			// alert("***))"+data.topartists.artist.length);
			
			
			list="<ol>\n";
			
			for (i=0; i<data.topartists.artist.length; i++)
			{
				list+="<li><a href=\"#\">"+data.topartists.artist[i].name+"</a></li>\n";
				
			}

			$("#topart").html(list+"</ol\>");
			
			$("#topart a").click(function(){
				
				getartistinfo($(this).html());
				
			});
	
			
			

				}, error: function(code, message){
				
			alert("-->>" + code);

				}});
			
	
}
	
	
$(function()
    {
			
			
			

		cache = new LastFMCache();

		lastfm = new LastFM({
		apiKey : '6c4705d045f5fa70d11a9c81392eb437',
		apiSecret : '80a8bb11cdd0e6061c9a93f3a822bc87',
		cache : cache
		});
		
		
		
		
			
		getgeochart($("#country").val());
		
		$("#country").change(function(){
		
		getgeochart($("#country").val());		
		
		
		});/**/
		/*
		
			lastfm.geo.getTopTracks({country : searchcountry}, {success: function(data){


			alert("***))"+data);
			
			
			

				}, error: function(code, message){
				
			alert("-->>" + code);

				}});
			
			
			
				
		
		
		});
		
		/**/
		
	});
		
	