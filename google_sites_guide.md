# Google サイトへの貼り付け方法（GitHub Desktop 利用編）

GitHub Desktop アプリを使って、作成したウェブサイトをインターネット上に公開し、Google サイトに埋め込む手順を説明します。

## 手順 1: ローカルリポジトリの作成（GitHub Desktopでの操作）
1.  **GitHub Desktop** を起動します。
2.  メニューの「File」→「Add local repository...」を選択します。
3.  「Choose...」をクリックし、今回作成した **`OiranExperience` フォルダ** を選択します。
4.  「Add repository」をクリックします。
    *   ※もし「This directory does not appear to be a Git repository」という警告が出たら、その表示内にある **「create a repository」** というリンクをクリックしてください。
    *   名前（Name）はそのままで「Create repository」ボタンをクリックします。

## 手順 2: インターネット上へ公開（Publish）
1.  画面上部にあるツールバーの **「Publish repository」** ボタンをクリックします。
2.  **Name** はそのままでOKです（例: `OiranExperience`）。
3.  **Keep this code private** のチェックを **外します**（重要：チェックが入っているとGitHub Pagesで公開できません）。
4.  「Publish repository」をクリックします。
    *   これでファイルがGitHubへアップロードされます。

## 手順 3: 公開設定（ブラウザでの操作）
1.  GitHub Desktopのツールバーにある **「View on GitHub」** ボタンをクリックします。ブラウザでGitHubのページが開きます。
2.  開いたページのメニュー（上部）にある **「Settings」** タブをクリックします。
3.  左側のメニューから **「Pages」** をクリックします。
4.  **Build and deployment** の **Branch** 設定で、「None」を **「main」** に変更し、右側の「Save」ボタンをクリックします。
5.  1〜2分待ったあと、ページを更新（リロード）すると、画面上部に「Your site is live at...」と表示され、公開URLが発行されます。
    *   例: `https://your-username.github.io/OiranExperience/`

## 手順 4: Google サイトへの埋め込み
1.  ご自身の Google サイトの編集画面を開きます。
2.  右側のメニューから「埋め込む」をクリックします。
3.  「URLを使用」タブを選択し、**手順3で発行されたご自身のURL** を貼り付けます。
4.  プレビューが表示されたら、「ページ全体」を選択して「挿入」をクリックします。
5.  枠のサイズを調整して完成です。

---

## サイトを更新する場合（画像やニュースを追加した後）

サイトの内容（画像や`news_data.js`など）を更新した後は、以下の手順で反映させます。

1.  **GitHub Desktop** を開きます。
2.  左下の枠に変更されたファイルの一覧が表示されています。
3.  その下の **Summary** 欄に適当な名前（例:「写真追加」「ニュース更新」など）を入力します。
4.  **「Commit to main」** ボタンをクリックします。
5.  画面上部の **「Push origin」** ボタンをクリックします。
6.  数分待つと、実際の公開サイト（Googleサイト上の表示）も更新されます。


---

## 補足：なぜ直接貼り付けられないのですか？

Google サイトの「コードを埋め込む」機能は、HTMLテキストのみを解釈します。今回作成したサイトのように、外部のCSSファイル（`styles.css`）や画像ファイル（`assets/images/...`）を読み込んでいる場合、それらのファイルがどこにあるのかGoogleサイト側が認識できないため、スタイルが崩れたり画像が表示されなかったりします。

外部サーバー（GitHub Pagesなど）にファイルを置くことで、Googleサイトから「あの場所にある画像を表示して」と正しく指示できるようになります。
