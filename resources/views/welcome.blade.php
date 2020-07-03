<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Styles -->
	<link href="{{ asset('css/app.css') }}" rel="stylesheet">


	<title>Laravel</title>

	<!-- Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
</head>


<body>
	<welcome id="app">  </welcome>

	<script src="{{ mix('js/app.js') }}"></script>

</body>


</html>