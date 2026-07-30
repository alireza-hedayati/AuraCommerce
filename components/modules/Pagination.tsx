"use client"

import ReactPaginate from "react-paginate"
import { useRouter, useSearchParams } from "next/navigation"

import { GrFormPreviousLink } from "react-icons/gr"
import { GrFormNextLink } from "react-icons/gr"

type PaginationProps = {
  currentPage: number
  pageCount: number
}

function Pagination({currentPage, pageCount}: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handlePageChange = ({ selected }: { selected: number }) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", String(selected + 1))
    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="w-full flex justify-center mt-8 px-2 sm:px-0">
      <div className="w-full max-w-screen-sm overflow-x-auto">
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageChange}
          forcePage={currentPage - 1}
          previousLabel={
            <div className="cursor-pointer flex items-center justify-center gap-1 px-3 py-2 rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50">
              <GrFormPreviousLink />
              Prev
            </div>
          }
          nextLabel={
            <div className="cursor-pointer flex items-center justify-center gap-1 px-3 py-2 rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50">
              Next
              <GrFormNextLink />
            </div>
          }
          containerClassName="flex flex-wrap justify-center items-center gap-2 py-2"         
          pageLinkClassName="min-w-[2.5rem] px-3 py-2 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-medium transition hover:opacity-75 cursor-pointer"
          activeClassName="bg-none text-white border-yellow-500 shadow-sm"
          activeLinkClassName=" bg-yellow-500 text-white border-yellow-500"         
          breakLinkClassName="cursor-pointer min-w-[2.5rem] px-3 py-2 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:opacity-75"
          disabledClassName="opacity-50 pointer-events-none"
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
        />
      </div>
    </div>
  )
}

export default Pagination
