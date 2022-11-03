@extends('web.app')
@section('title')
    {{ __('messages.faq.faqs') }}
@endsection
@push('css')
    @livewireStyles
@endpush
@section('content')
    @livewire('faqfront')
@endsection
@push('scripts')
    @livewireScripts
@endpush
