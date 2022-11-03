<?php

namespace App\Http\Controllers;

use Spatie\MediaLibrary\Models\Media;

class DownloadMediaController extends Controller
{
    public function show(Media $mediaItem)
    {
        return $mediaItem;
    }
}
