"use client";

export default function LocationMap() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            Location
          </span>

          <h2 className="text-4xl font-bold mt-2">
            Find Me On The Map
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Currently based in Dhaka, Bangladesh and available for freelance,
            remote, and full-time software development opportunities.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.920638853999!2d90.432309374029!3d23.81354568635169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65555555555%3A0x23c2934f4c81fc4!2sMagura%20Group!5e1!3m2!1sen!2sbd!4v1780745295466!5m2!1sen!2sbd"
            className="w-full h-[500px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}