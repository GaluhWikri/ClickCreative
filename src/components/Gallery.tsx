// Tidak perlu mengimpor Instagram dari lucide-react lagi
// import { Instagram } from 'lucide-react';

const galleryItems = [
  { id: 1, image: '/image/panggung.jpg' }, // Placeholder 1
  { id: 2, image: '/image/nadin.jpg' }, // Placeholder 2
  { id: 3, image: '/image/artis.jpg' }, // Placeholder 3
  { id: 4, image: 'https://scontent.cdninstagram.com/v/t51.82787-15/543669337_17971480571937588_8504267431478070846_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzcxNTk2NTc1NDQ2Nzg4NzYwOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=ijZKPHaOSooQ7kNvwFq6FwU&_nc_oc=Adk1xMRvoNKq4FTTMhNqjURy-aQTJFyh_9qeqXaIJOX2RyWZvccKvOe5N7FYkrPcG2c&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=aB1QciPGA8xmCZ4ZGhCa7Q&oh=00_AfiZMe0VjRAA5JTU0WDZR2i5TVfpJM6qW3MNeAwo4kDd3Q&oe=6922FE8E' }, // Placeholder 4
  { id: 5, image: 'https://scontent.cdninstagram.com/v/t51.82787-15/544061990_17971480517937588_34801336938257196_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzcxNTk2NTc1NDM0MjA4NjY3Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=Fsh5I3Y7pnYQ7kNvwFBZLB_&_nc_oc=AdmH5pLkfQPfq-A-KtHNP7FmFdPB3MR8Zx7fMf39nmamrQ0kFyrvtCGvXLC6vgvRTY0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=aB1QciPGA8xmCZ4ZGhCa7Q&oh=00_AfgBNlb95JA2z0labiClcIys1KJtpCN1guwJcjg3JeVzgQ&oe=69230A78' }, // Placeholder 5
  { id: 6, image: 'https://scontent.cdninstagram.com/v/t51.82787-15/541609795_17971480586937588_8904922980259807233_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzcxNTk2NTc1NDYyNzI4OTU4NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=OBQ0s52YNswQ7kNvwEckLWr&_nc_oc=Adm5kEunytY6064naVc1sMduNtbbmyeNjptxp5DkkrT4lxG-ZEtQrQMNTjX490NqgKM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=aB1QciPGA8xmCZ4ZGhCa7Q&oh=00_Afi-RbqT16O6VnaLmjkoPXmbq7p7UN8Xq1WGxScrJIwBMg&oe=6922F552' }  // Placeholder 6
];

export default function Gallery() {
  return (
    <section id="projects" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-black text-xs font-semibold uppercase tracking-widest mb-3">
            GALLERY
          </div>
          <h2 className="text-5xl font-bold text-black mb-4 tracking-tight">
            Recent Projects
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
            A glimpse into our portfolio of successful events and celebrations.
          </p>
        </div>
        {/* End Header Section */}

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden bg-black cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Overlay gelap yang muncul saat hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>


            </div>
          ))}
        </div>

      </div>
    </section>
  );
}