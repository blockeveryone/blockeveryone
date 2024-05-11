<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="description" content="{{ $page->description ?? $page->siteDescription }}">

        <meta property="og:title" content="{{ $page->title ? $page->title . ' | ' : '' }}{{ $page->siteName }}"/>
        <meta property="og:type" content="{{ $page->type ?? 'website' }}" />
        <meta property="og:url" content="{{ $page->getUrl() }}"/>
        <meta property="og:description" content="{{ $page->description ?? $page->siteDescription }}" />

        <title>{{ $page->title ?  $page->title . ' | ' : '' }}{{ $page->siteName }}</title>

        <link rel="home" href="{{ $page->baseUrl }}">
        <link rel="icon" href="/favicon.ico">

        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    </head>

    <body class="flex flex-col justify-between min-h-screen bg-gray-100 text-gray-800 leading-normal font-sans">
        <header class="flex items-center shadow bg-white border-b h-24 py-4 px-10" role="banner">
            <div class="container flex items-center justify-between max-w-8xl mx-auto">
                <div class="flex justify-end items-center">
                    <img class="h-12 md:h-16 mr-4" src="/assets/img/rank_0.png" id="player-rank-icon">
                    <h2 class="m-0 p-0 text-purple-950" id="player-rank-name">Rookie</h2>
                </div>

                <div class="flex items-center justify-center flex-col min-w-52">
                    <h4 class="m-0 mb-2 p-0 text-sm uppercase font-black">BLOCKS TO NEXT LEVEL</h4>
                    <div class="w-full bg-purple-700 rounded-full h-2.5">
                        <div class="bg-purple-400 h-2.5 rounded-full" style="width: 0%" id="progress-bar"></div>
                    </div>
                    <h4 class="m-0 mt-2 p-0 text-sm uppercase font-black" id="progress-left">7 LEFT</h4>
                </div>
            </div>
        </header>

        @include('_nav.menu-responsive')

        <main role="main" class="flex-auto w-full container max-w-4xl mx-auto py-16 px-6">
            @yield('body')
        </main>

        <footer class="bg-white text-center text-sm py-4 px-10" role="contentinfo">
            <ul class="flex md:flex-row justify-evenly list-none max-w-8xl mx-auto">
                <li class="m-2 w-1/3 text-left">
                    <a href="https://form.feathery.io/to/qx86hL" target="_blank">Submit A Card</a>
                </li>
                <li class="m-2 w-1/3 text-center">
                    Block Everyone. Forever.
                </li>
                <li class="m-2 w-1/3 text-right">
                    <a href="https://github.com/blockeveryone/blockeveryone/" target="_blank">Get The Code</a>
                </li>
            </ul>
        </footer>

        <script src="{{ mix('js/main.js', 'assets/build') }}"></script>

        @stack('scripts')
    </body>
</html>
