
window.addEventListener( 'load', function () {

    
    const text = document.getElementById( "theText" );
    const file = {
          dom    : document.getElementById( "theFile" ),
          binary : null
        };
  
    
    const reader = new FileReader();
  
 
    reader.addEventListener( "load", function () {
      file.binary = reader.result;
    } );
  
    
    if( file.dom.files[0] ) {
      reader.readAsBinaryString( file.dom.files[0] );
    }
  
    
    file.dom.addEventListener( "change", function () {
      if( reader.readyState === FileReader.LOADING ) {
        reader.abort();
      }
  
      reader.readAsBinaryString( file.dom.files[0] );
    } );
  
    
    function sendData() {
     
      if( !file.binary && file.dom.files.length > 0 ) {
        setTimeout( sendData, 10 );
        return;
      }
  
 
      const XHR = new XMLHttpRequest();
  
      
      const boundary = "blob";
  
     
      let data = "";
  
     
      if ( file.dom.files[0] ) {
        
        data += "--" + boundary + "\r\n";
  
    
        data += 'content-disposition: form-data; '
     
              + 'name="'         + file.dom.name          + '"; '
     
              + 'filename="'     + file.dom.files[0].name + '"\r\n';
   
        data += 'Content-Type: ' + file.dom.files[0].type + '\r\n';
  
        
        data += '\r\n';
  
       
        data += file.binary + '\r\n';
      }
  
   
      data += "--" + boundary + "\r\n";
  
 
      data += 'content-disposition: form-data; name="' + text.name + '"\r\n';
    
      data += '\r\n';
  
      
      data += text.value + "\r\n";
   
      data += "--" + boundary + "--";
  
    
      XHR.addEventListener( 'load', function( event ) {
        alert( 'Yeah! Data sent and response loaded.' );
      } );
   
      XHR.addEventListener( 'error', function( event ) {
        alert( 'Ошибка отправки' );
      } );
  
     
      XHR.open( 'POST', 'https://example.com/cors.php' );
  
     
      XHR.setRequestHeader( 'Content-Type','multipart/form-data; boundary=' + boundary );
  
       
      XHR.send( data );
    }
  
       const form = document.getElementById( "theForm" );
  
 
    form.addEventListener( 'submit', function ( event ) {
      event.preventDefault();
      sendData();
    } );
  } );