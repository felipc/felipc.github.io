function mudaResize(){var layout=$.responsiveHub("layout");if($.responsiveHub("layout")=='phone'){}else{}}
function desativarCopia(){var s,r;var mensagem='Textos, fotos, artes e vídeos estão protegidos pela legislação brasileira sobre direito autoral. Não reproduza o conteúdo do site em qualquer meio de comunicação, eletrônico ou impresso, sem autorização do São Carlos Agora. Se precisa copiar trecho de texto do site entre em contato com o e-mail faleconosco@saocarlosagora.com.br';$('.desabilitarcopia').bind('copy',function(){if(!$("#tempbox").length)
$('<span>').attr('id','tempbox').appendTo('body').css('font-size','0');var tempbox=document.getElementById("tempbox");$('#tempbox').html(mensagem);if(typeof window.getSelection!=='undefined'){s=window.getSelection();s.removeAllRanges();s.selectAllChildren(tempbox);r=s.getRangeAt(0);}else{s=document.selection.createRange();document.selection.empty();s.moveToElementText(tempbox);r=s.pasteHTML(mensagem);s.select();}});}
$(document).ready(function(){if($('.desabilitarcopia').length){desativarCopia();}
$('.dropdown-toggle').parent().hover(function(){var layout=$.responsiveHub("layout");if(layout!='phone')
{$(this).find('.dropdown-toggle:eq(0)').dropdown('toggle');}});jQuery("#bloco1 .rslides").responsiveSlides({auto:true,speed:500,timeout:6000,navContainer:"",manualControls:".navegacao",pager:true});$('#noticia_galeria').royalSlider({fullscreen:{enabled:true,nativeFS:true},controlNavigation:'thumbnails',autoScaleSlider:true,autoScaleSliderWidth:660,autoScaleSliderHeight:500,loop:false,imageScaleMode:'fit-if-smaller',navigateByClick:true,numImagesToPreload:2,arrowsNav:true,arrowsNavAutoHide:true,arrowsNavHideOnTouch:true,keyboardNavEnabled:true,fadeinLoadedSlide:true,globalCaption:true,globalCaptionInside:true,thumbs:{appendSpan:true,firstMargin:true,paddingBottom:4,orientation:'top'}});$.responsiveHub({layouts:{960:"web",710:"tablet",320:"phone"},defaultLayout:"web"});$('#flutuante').each(function(){$(this).attr('altura',$(this).height()).css({'height':'0px'});});$('#flutuante .fConteudo a.fechar').show().hide();$('#flutuante a.fechar').click(function(){$(this).closest('#flutuante').hide('slow');return false;});$('#flutuante').animate({"height":$('#flutuante').attr('altura')},1200,function(){$('#flutuante .fConteudo a.fechar').fadeIn('slow');});if($.responsiveHub("layout")=='web')
{$('div.navbar').fixFloat();}});