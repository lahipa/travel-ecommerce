This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Initial React

Start and prepare the react


## Diskusi Sabtu 16 Maret 2020

Mentransfer state di signup ke dalam profile
- ke File Home lalu tambahkan 1 props bernama dataSignup berisi function yang men-set data di dalam signup ke dalam state local data di component home
- berikan props baru ke dalam component profile berisi data
- Buka File signup
tambahkan onSubmit di dalam Form mengarhkan ke onSubmitSignup
buat function onSubmitSignup berisi e.preventDefault()
lalu masukkan data state local ke dalam props function dataSignup
- Buka file profile
ambil data di dalam props profile
masukan ke dalam return
alurnya
user input data ke Signup
signup kirim data ke home
home kirim data ke profile
