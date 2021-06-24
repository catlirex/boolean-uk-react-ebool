import CategoryCard from "../components/CategoryCard";
import useFetch from "../hook/useFetch";

export default function CategoriesPage() {
  const [catList] = useFetch("http://localhost:4000/categories");

  return (
    <main>
      <section className="categories-container main-wrapper">
        <ul className="categories-container__list">
          {/* <!-- Single category --> */}
          {catList.map((cat) => (
            <CategoryCard key={`${cat.id} - ${cat.name}`} cat={cat} />
          ))}
        </ul>
      </section>
    </main>
  );
}
