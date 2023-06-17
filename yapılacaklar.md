Dinamik gelen verilere göre şekillenebilen "responsive" navbar tasarımı

## 1
Componentin kendisi responsive olarak veri tabanından gelen verileri alıp kullanacak.

navbar da kullanılmak üzere veri tabanından gelecek veriler:
- Butonun yazısı
- Butonun yönlendirme linki
- Butonun sıra numarası
- Buttonların genel CSS özelliği (default bir özellik de tanımlanacak)
- Butonun işlevi [mainButton, parentButton, childButton]
- navbarın rengi (normal renk veya gradient geçişli bir renk alabilir halde olmalı)

not: child buttonlar ancak main özelliği olan butonların altında yer alabilirler.
böylelikle navbar da bulunan butonlra kendi aralarında iç içe koyulabilir bir yapıda olacaktır.


yukarıdaki verileri fake veri olarak alıp componente gelen verinin yapısına göre şekillenen bir navbar tasarlamanız beklenmektedir.

hem görsel hem responsibilitesi iyi hem de işlevselliği düzgün çalışan bir yapı sizden beklenmektedir.

Tailwind css kullanmanız ve inline css yazmanız istenmektedir.

performans konusunda olumsuz yönde etkilemediği takdirde (animasyon, efekt, icon) kullanmanız olumlu yorumlanacaktır.

NOT: aşağıdaki navbar yapısındaki içerik tamamen veri olarak gelecek ve bu veri yapısına göre navbar otomatik şekil alacak ve düzenleencektir.
manuel olarak aşağıdak iyapıyı oluşturmanız istenmemektedir. 
gelen veriye göre sistem kendini kontrol edecek ve hangi veri neredeyse otomatik olarak navbar şekillenecek ve organize olması beklenmektedir.
aşağıdaki yapıyı fake veri ypaısına çevirip veri tabanındna gelmiş gibi kullanmanız beklenmektedir.
child yapılar parent ypaıların alt elemanı olacaktır.



Navbar button yapısı:

### Anasayfa

### Hizmetlerimiz
	## Teknik Hizmetlerimiz
		- Frontend Teknolojileir
		- Backend Teknolojileri
		- AWS Hizmetleri
		

	## Danışmanlık Hizmetlerimiz
		- Teknik Destek
		- Bilgilendirme Hizmetleri
		- Mentorluk Hizmetleri

		# Danışmanlık Eğitimleri
			- Sertifikalı Danışmanlık Hizmeti
			- Kurumsal Danışmanlık Hizmeti

		- Eğitim Öğretim Planlama
		- Yazılım Danışmanlığı
		- Proje Danışmanlığı

	## Hatalı Altyapı Onarımı

### Hakkımızda
	## Biz Kimiz?
	## Kurumsal
	## Referanslarımız
		# Geçmiş Referanslar
			- x referansı
			- y referansı
			- z referansı
		# Gelecek Referanslar
			- a referansı
			- b referansı
			- c referansı 
	## Vizyon
	## Misyon

### İletişim

### Kayıt Ol

### Giriş Yap