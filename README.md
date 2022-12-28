# keep2md

Google Keepのエクスポートデータをマークダウンファイルに変換する

## usage

- ts-nodeのインストール
    ```sh
    $ npm i ts-node
    ```

- zipを展開して、jsonファイルを`in`ディレクトリに配置する

- 変換実行
    ```sh
    $ ./keep2md.sh
    ```

- `out`ディレクトリにマークダウンファイルが作成され、`done`ディレクトリに元jsonファイルが移動される
