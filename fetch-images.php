<?php

    $data = json_decode(file_get_contents(__DIR__ . "/source/assets/data/list.json"));

    foreach ($data as $key => $item) {
        echo "Requesting image for {$item->Name}...";
        $hash = md5($item->Name);
        $data[$key]->hash = $hash;

        $requestUrl = "https://picsum.photos/seed/{$hash}/460/700";
        $fileName = __DIR__ . "/source/assets/cards/{$hash}.jpg";

        if (!file_exists($fileName)) {
            echo " DOWNLOADED\n";
            file_put_contents($fileName, file_get_contents($requestUrl));
        } else {
            echo " SKIPPED\n";
        }
    }

    file_put_contents(__DIR__ . "/source/assets/data/list.json", json_encode($data, JSON_PRETTY_PRINT));

