class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
        
            <a href='index.html'class="basically">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp 
            <a href='about.html'class="basically">About us</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp 
            <a href='contact.html'class="basically">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='doctor.html'class="basically">Doctor</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <div class="dropdown rick">
            <button class="dropbtn sequence" style=" font-size:25px " >Service</button>
            <div class="dropdown-content">
                <a href="dentalclinic.html">Dental Care</a>
                <a href="otology.html">Otology Care</a>
                <a href="cardiac.html">Cardiac care</a>
                <a href="hepatology.html">Hepatology</a>
            </div>
        </div>
            
            
        `

    }
}
customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="sack"> 
        Address <br>
        
        Rayat Hospital & Research Center <br>
        180, Shri Rampuri, Niwaru Road,<br>
        Kaal Road <br>
        Benad, Chandigarh 302020 <br>
        Contact No - 0123456789 <br>
        Email: rayatbahra@hospital.com </div>
         
        <div class="row">
        <div class="col-3"></div>
        <div class="col-6 ">
            <h2 style="font-size: 35px;">Emergency Number-: 072072 17221</h2>
        </div>
    </div>
    <div class="row">
    <div class=col-3></div>
    <div class=col-4 >
    Copyright (c) 2022  Bahra Hospital
    </div>
    </div>
 `

    }
}
customElements.define('my-footer', MyFooter)