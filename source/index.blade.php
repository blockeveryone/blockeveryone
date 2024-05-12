@extends('_layouts.main')

@section('body')
    <div class="card-wrapper">
        <div class="card">
            <div id="photo" class="photo" style="background-image: url('https://picsum.photos/seed/name/482/738')"></div>
            <div class="front">
                <span id='card-title' class="font-bold text-xs">Account Name</span>
                <div class="card-button-wrapper">
                    <a id="instagram" href="#" target="_blank" class="scale-75 w-full text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xs px-5 m-0">
                        Instagram
                    </a>
                    <a id="tiktok" href="#" target="_blank" class="scale-75 w-full text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xs px-5 m-0">
                        TikTok
                    </a>
                    <a id="twitter" href="#" target="_blank" class="scale-75 w-full text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xs px-5 m-0">
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
        <img src="/assets/img/pack-raw.png" class="w-[250px] h-[375px]">
    </div>
@stop
