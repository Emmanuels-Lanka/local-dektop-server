# Local Desktop Server
RFID &amp; QR Integrated API server

## Auto start server on startup Windows
-   Create a new file called `startup.bat` and open it with any code editor
-   Copy and paste this code
    ```
        TIMEOUT 3
        cd C:\Users\WIN\Desktop\rfid-desktop-server
        npm start
        cmd /k
    ```
-   Press Windows Key + R - Open Run command
-   Enter `shell:startup` (will open a folder)
-   Copy and paste the `bat` file into this folder
-   Restart the Windows (will run the cmd automatically)
-   Test the server is running 🎉

[Tutorial Video](https://www.youtube.com/watch?v=nF9TiL34FT0)