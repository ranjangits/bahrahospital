class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
        
            <a href='index.html'class="basically">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp 
            <a href='about.html'class="basically">About us</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp 
            <a href='contact.html'class="basically">contact</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='doctor.html'class="basically">doctor</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            
            <a href='service.html'class="basically">service</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            
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
        Copyright (c) 2022 Ranjan kumar 
        <div class="row">
        <div class="col-3"></div>
        <div class="col-5">
            <h2 style="font-size: 35px;">Emergency Number-: 072072 17221</h2>
        </div>
    </div>

        
        `

    }
}
customElements.define('my-footer', MyFooter)