	$(document).ready(function(){
		$(".searchbutton").click(function(){
			
			let aboutmovie = $("input[name='aboutmovie']").val();
			let selector = $("select[name='aboutmovieselector']").val();
			let movieyear = $("input[name='movieyear']").val();
			let url='';
			if(aboutmovie =='' || selector == ''){
				$(".allmoviedetail").fadeOut(2000);
				

				if(aboutmovie ==''){
					$(".aboutmovie").addClass("is-invalid");
				
				}
				if(selector ==''){
					$(".aboutmovieselector").addClass("is-invalid");
					
				}
				
			}else{
				
				
				$(".aboutmovie").removeClass("is-invalid");
				$(".aboutmovieselector").removeClass("is-invalid");
				let apikey = prompt("Provide api Key for getting response",'719040a5');
				if(apikey != ''){
					$(".flshmsg").removeClass("alert-danger").text('').hide();
					
					if(selector=='title'){

						if(movieyear !=''){
							url =`https://www.omdbapi.com/?t=${aboutmovie}&y=${movieyear}`;
						}else{
							url =`https://www.omdbapi.com/?t=${aboutmovie}`;
						}

						$.ajax({
							url:url+'&apikey='+apikey,
							type:'GET',
							dataType: 'json',
							asyn:true,
							success:function(response,xhr){
								console.log(response);
								if(xhr=='success'){

									if(response.Error){
										$(".allmoviedetail").fadeOut(2000);
										let error =  `finding error beacause of getting error ( ${response.Error} ) and response is ( ${response.Response} )`;
										$('.errorresponse').html(error).show(2000);

									}else{
										$('.errorresponse').hide();
										let enterdataone='';
										let enterdatatwo='';
										for(x in response){
											if(typeof(response[x])=='object'){
												var lengthvalue =response[x].length;

												for(var i=0;i<lengthvalue;i++){
												 enterdataone +=`source ${i}: ${response[x][i].Source} , Value ${i} : ${response[x][i].Value} </br>`;	
												}
												
											}

											if(typeof(response[x]) != 'object'){

												enterdatatwo += `${x} : ${response[x]} <br>`;
											}
											
											
										}
										$(".allmoviedetail").show();
										$('.moviedetail').html(`${enterdataone} ${enterdatatwo}`);
										if(response.Poster){
											if(response.Poster=='N/A'){
												let srcimges="https://www.usa.canon.com/internet/wcm/connect/us/31d7c3cc-d791-4f43-a435-7aed50d589d5/product-image-not-available-GENERAL-d.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-31d7c3cc-d791-4f43-a435-7aed50d589d5-lGLqpk9";
												$(".movieposterimage").attr("src",srcimges);
											}else{
												$(".movieposterimage").attr("src",response.Poster);
											}
											
										    let posterbelow = 'Title :'+response.Title+' Actors:'+response.Actors+
										    'Writer : '+response.Writer+' Plot : '+response.Plot;
											$(".posterdetail").html(posterbelow);
										}
													
									}

								}else{
									
									alert("getting some issue getting success response ");
								}
								
							},
							beforeSend:function(){
								console.log('processing');
							},
							error:function(log){
								$(".errorresponse").text("Getting Some Error plaese Provide all manadatory detail").show(200);

								$(".allmoviedetail").hide();
							
							},
							complete:function(){
								$(".flshmsg").removeClass("alert-danger").addClass("alert-success").text("Request completed Response shown below").show(200).fadeOut(6000);
							}

						});

					}else if(selector =='id'){
						

						if(movieyear !=''){
							url =`https://www.omdbapi.com/?i=${aboutmovie}&y=${movieyear}`;
						}else{
							url =`https://www.omdbapi.com/?i=${aboutmovie}`;
						}

						$.ajax({
							url:url+'&apikey='+apikey,
							type:'GET',
							dataType: 'json',
							asyn:true,
							success:function(response,xhr){
							console.log(response);
								if(xhr=='success'){

									if(response.Error){
										$(".allmoviedetail").fadeOut(2000);
										let error =  `finding error beacause of getting error ( ${response.Error} ) and response is ( ${response.Response} )`;
										$('.errorresponse').html(error).show(2000);

									}else{
										$('.errorresponse').hide();
										let enterdataone='';
										let enterdatatwo='';
										for(x in response){
											if(typeof(response[x])=='object'){
												var lengthvalue =response[x].length;
												for(var i=0;i<lengthvalue;i++){
												 enterdataone +=`source ${i}: ${response[x][i].Source} , Value ${i} : ${response[x][i].Value} </br>`;	
												}
												//enterdataone=`sourceone : ${response[x][0].Source} Valueone:${response[x][0].Value} </br> sourcetwo : ${response[x][1].Source} Valuetwo:${response[x][1].Value} </br> sourcethree : ${response[x][2].Source} Valuethree:${response[x][2].Value}`;
											}

											if(typeof(response[x]) != 'object'){
												enterdatatwo += `${x} : ${response[x]} <br>`;
											}
											
											
										}
										$(".allmoviedetail").show();
										$('.moviedetail').html(`${enterdataone} ${enterdatatwo}`);
										if(response.Poster){
										
											if(response.Poster=='N/A'){
												let srcimges="https://www.usa.canon.com/internet/wcm/connect/us/31d7c3cc-d791-4f43-a435-7aed50d589d5/product-image-not-available-GENERAL-d.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-31d7c3cc-d791-4f43-a435-7aed50d589d5-lGLqpk9";
												$(".movieposterimage").attr("src",srcimges);
											}else{
												$(".movieposterimage").attr("src",response.Poster);
											}
										    let posterbelow = 'Title :'+response.Title+' Actors:'+response.Actors+
										    'Writer : '+response.Writer+' Plot : '+response.Plot;
											$(".posterdetail").html(posterbelow);
										}
													
									}

								}else{
									
									alert("getting some issue getting success response ");
								}
								
							},
							beforeSend:function(){
								console.log('processing');
							},
							error:function(log){
								$(".errorresponse").text("Getting Some Error plaese Provide all manadatory detail").show(200);

								$(".allmoviedetail").hide();
								
							},
							complete:function(){
								$(".flshmsg").removeClass("alert-danger").addClass("alert-success").text("Request completed Response shown below").show(200).fadeOut(6000);
							}

						});

						
					}else{
						alert("please select a valid selector its movie title or movie Id");

					}
					
				}else{
					$(".flshmsg").addClass("alert-danger").text("please provide api key").show(2000);
					//$(".flshmsg").addClass("alert-danger").show().hide(2000);
				}


			}
		});
	});