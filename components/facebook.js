import Script from 'next/script';

function Facebook() {
    return (
        <div>
            <div id="fb-root"></div>

            <div id="fb-customer-chat" className="fb-customerchat"></div>
            <Script strategy="lazyOnload">
                {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "100735796131062");
            chatbox.setAttribute("attribution", "biz_inbox");
          </script>
      
          <!-- Your SDK code -->
          <script>
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v15.0'
              });
            };
      
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        `}
            </Script>
        </div>
    );
}

export default Facebook;




