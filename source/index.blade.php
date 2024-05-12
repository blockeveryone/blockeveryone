@extends('_layouts.main')

@section('body')
    <div class="card-wrapper">
        <div class="card">
            <div id="photo" class="photo" style="background-image: url('https://picsum.photos/seed/name/482/738')"></div>
            <div class="front">
                <span id='card-title' class="font-bold">Account Name</span>
                <div class="card-button-wrapper">
                    <a id="instagram" href="#" target="_blank" class="w-full text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-1 me-2 mb-2">
                        Instagram
                    </a>
                    <a id="tiktok" href="#" target="_blank" class="w-full text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-1 me-2 mb-2">
                        TikTok
                    </a>
                    <a id="twitter" href="#" target="_blank" class="w-full text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-1 me-2 mb-2">
                        Twitter
                    </a>
                </div>
                <button id="save-button" class="done-button font-black">
                    DONE
                </button>
            </div>
        </div>
    </div>
    <div id="pack-screen">
        <img src="/assets/img/pack-raw.png">
    </div>
    <div id="reward-screen">
        <h1 id='reward-screen-title' class="mb-8 uppercase text-center"></h1>
        <img id='reward-screen-rank-img' src="/assets/img/rank_0.png">
        <h5 id='reward-screen-tagline' class="mb-0 uppercase text-center"></h5>
        <h1 id='reward-screen-rank-title' class="mt-2 uppercase"></h1>
        <p id='reward-screen-level' class="mt-0"></p>
        <button id="level-up-ok" type="button" class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-4"></button>
    </div>
@stop
