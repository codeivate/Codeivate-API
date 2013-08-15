<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Code Ivate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="shortcut icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAvZJREFUeNpi/P//P8NAAiaGAQajDhhwB7Dgk/Tz80MX4gPiFCC2BGJjIBYB4htAfByI9wDxZmTFmzZtIugARmJzAdAxeUCqhYCy20BcArR4P7EhQNABQItNgVQ/EOuRELKtQEd0UuwAoOW6QGoDEIvCxExMTFh8fHxYVVRUmPn4+BifPHny7/z5839WrVr16+PHj8iGtQMd0U6pA0DxagZic3JyMqakpLC7urqyYlP76dOn/9OnT/9x9OjRP0jCQUBH7CHLAUDLtaGJi4GJiYmhubmZS1dXl5mQj7q7u78fPnwY5ohL0Og7D3TIPVJzQTKM4enpyUqM5SCQmZnJcebMma/fv3//D00386EeegmkZgHxHKBj3uMsB4AKVYE4B8h0QnIAG7Gpj4eHh9HJyQmbx8SBuBaIjwHNd8QIAaAgKI9XAXEWsi5BQUFGOTk5kgosHR0dlmvXrv0FJdRfv379v3Pnzr+nT5/+g0pLA/EqoH1OwJC4zAK1XB9ILQNiWXTDRERESC4tra2tWUAYWezChQt/+vv7f7x//x4UNezQtOECToRAB+yHlmxg4O7uzmpqasoiJCTE+Pr16/+WlpYs1Ch2792797eoqOjbv3+wwGDwYj537hwoPorA8cHCwlBXV8fp7+/PJi0tzQR0AJOsrCzV6gtgdDKBLL9y5cpfqBAzyPBImIKIiAh2IyMjFgYaAhcXF+RyxJIJWrGAgYODA00tx5KmZEAceRhPTEyM5tUzKFcgcX+ALHyDXJzS2gGg7InEPc4EK25BYM+ePb9p7YDVq1f/QuIeATlgEYy3ZMmSn6CsQguL//z5wzB79uyfV69eRTZ/DkY5AMqKISEhbB4eHmygcoBSi798+fL/xo0bfxcvXvzz/v37/5CkCoEl4VyYA/ShTSp2bIYAFfIiFdmfqRAg84BmFsArIyDnIiiLAvFZGieBT0CcBLMcpTKCOsIR6EMbaFUMKh+kqGDpe2hCPw6tir+S1Sgd7ZiMOoBWACDAAI/+HSP0QQD5AAAAAElFTkSuQmCC">

        {{ HTML::style('css/style.css'); }}
        {{ HTML::script('js/modernizr.js') }}
        {{ HTML::style("http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css") }}
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <div class="container">
            @yield('content')
        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="//code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
        {{ HTML::script('js/poll.js') }}

        @yield('scripts')
    </body>
</html>
