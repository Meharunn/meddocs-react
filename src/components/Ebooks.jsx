
import { useState } from "react";

function Ebooks() {
  const [search, setSearch] = useState("");

  const ebooks = [
     {title:"Alzheimer's Disease and Treatment", image:"https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=400"},
     {title:"Inflammatory Bowel Disease",image:"https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400"},
     {title:"Osteoarthritis", image:"https://images.unsplash.com/photo-1584515933487-779824d29309?w=400"},
     {title:"Cancer Therapy", image:"https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400"},
     {title:"Vascular Diseases", image:"https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400"},
     {title:"Nanotechnology", image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400"},
     {title:"COVID 19", image:"https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400"},
     {title:"Modern Chemistry", image:"https://images.unsplash.com/photo-1532634993-15f421e42ec0?w=400"},
     {title:"Biochemistry", image:"https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400"},
     {title:"Women's Health", image:"https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400"},
     {title:"Robotics", image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400"},
     {title:"Microbiology", image:"https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400"},
     { title:"Cardiology Essentials", image:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400" },
     { title:"Neurology Research", image:"https://images.unsplash.com/photo-1576671081837-49000212a370?w=400" },
    {title:"Pediatrics Handbook",image:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400"},
     { title:"Dermatology Practice", image:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400" },
     { title:"Surgical Techniques", image:"https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400" },
     { title:"Clinical Pharmacology", image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" },
     { title:"Radiology Imaging", image:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400" },
     { title:"Emergency Medicine", image:"https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400" },
     { title:"Nursing Practice", image:"https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400" },
     { title:"Public Health Studies", image:"https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400" },
     { title:"Genetics & DNA", image:"https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=400" },
     { title:"Biotechnology Advances", image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400" }
    ];

  const filteredBooks = ebooks.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="ebooks" id="ebooks">

      <div className="section-header">
        <span className="section-tag">E-BOOK LIBRARY</span>
        <h2>Medical E-Books Collection</h2>
        <p>Search trusted medical books instantly.</p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search ebooks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="ebook-grid">
        {filteredBooks.map((book, index) => (
          <div className="ebook-card" key={index}>
            <div className="ebook-image">
              <img src={book.image} alt={book.title} />
            </div>

            <div className="ebook-content">
              <h3>{book.title}</h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Ebooks;
