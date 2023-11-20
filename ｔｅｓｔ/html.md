<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>按鍵跳轉範例</title>
    <script>
        function redirectToPage(page) {
            window.location.href = page;
        }
    </script>
</head>
<body>
    <h1>按鍵跳轉</h1>
    <button onclick="redirectToPage('dog.html')">跳轉到狗狗頁面</button>
    <button onclick="redirectToPage('cat.html')">跳轉到貓咪頁面</button>
</body>
</html>
