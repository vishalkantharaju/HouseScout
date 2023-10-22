Running our project

1. Clone

2. In the frontend folder, do 'npm i' and then 'npm run dev'

3. In the backend folder, do 'conda create -n MedHelp python=3.8.16', then 
'conda activate MedHelp', and then 'pip install -r requirements.txt', and 
then 'python server.py'

4. Explore our site! The login for a Hospital is (username = Dell, password = Dell).
The login for an EMS is (username=420, password=420)

In particular, try exploring the report feature! As an EMS, you are able to 
report on the patient's condition. One you submit a report, if you go back to the hospital side,
you'll see that the download button for Unit 420 is now clickable (if it isn't,
try refreshing). Click it, and you'll see the data you typed into the report printed into the console.