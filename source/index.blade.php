@extends('_layouts.main')

@section('body')
    <div id="gameplay" class="w-full block">
    </div>
    <div class="card">
        <div class="photo" style="background-image: url('/assets/img/card-temp.png')"></div>
        <div class="front">
            <span id='card-title' class="font-bold">Account Name</span>
            <div class="card-button-wrapper">
                <a href="#" class="text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-1 me-2 mb-2">
                    Instagram
                </a>
                <a href="#" class="text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-1 me-2 mb-2">
                    TikTok
                </a>
                <a href="#" class="text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-1 me-2 mb-2">
                    Twitter
                </a>
            </div>
            <button class="done-button font-black">
                SAVE
            </button>
        </div>
    </div>
@stop
