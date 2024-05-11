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
@stop
