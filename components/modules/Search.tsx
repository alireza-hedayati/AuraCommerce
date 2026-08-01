"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

function Search() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const [value, setValue] = useState(searchParams.get("q") || "")

    const search = () => {
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set("q", value)
        } else {
            params.delete("q")
        }

        router.push(`/products?${params.toString()}`)
    }

    return (
        <div className="w-full px-4 py-4 sm:px-0">
            <div className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-lg shadow-slate-200/60 backdrop-blur-sm transition hover:shadow-slate-300">
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
                        search()
                    }}
                    className="flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                    <label htmlFor="site-search" className="sr-only">
                        Search products
                    </label>
                    <input
                        id="site-search"
                        type="text"
                        placeholder="Search products, brands, or categories"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="min-w-0 flex-1 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                    />
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-2xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        Search
                    </button>
                </form>
                <p className="mt-3 text-xs text-slate-500 sm:text-sm">
                    Use keywords like "shoes", "accessories", or "outdoor" to quickly filter products.
                </p>
            </div>
        </div>
    )
}

export default Search