@extends('frontEnd.layouts.master')

@section('section')
<div id="app">
</div>

@viteReactRefresh
@vite('resources/js/pages/article.jsx')



@endsection