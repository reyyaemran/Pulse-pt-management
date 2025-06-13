"use client"
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Client {
  id: string
  clientNumber?: string // 6-digit member ID
  name: string
  email: string
  phone: string
  status: "active" | "inactive"
  joinDate: string
  lastSession: string
  avatar: string
}

interface ClientsTableProps {
  clients: Client[]
  filterStatus?: "active" | "inactive"
  refreshClients?: number
}

export function ClientsTable({ clients, filterStatus, refreshClients }: ClientsTableProps) {
  const filteredClients = filterStatus ? clients.filter((client) => client.status === filterStatus) : clients
  const [tableData, setTableData] = useState(filteredClients)

  useEffect(() => {
    // In a real app, you would fetch the latest clients from your API here
    setTableData(filteredClients)
  }, [filteredClients, refreshClients])

  const columns: ColumnDef<Client>[] = [
    {
      accessorKey: "clientNumber",
      header: () => <div className="font-bold">Member ID</div>,
      cell: ({ row }) => (
        <span className="font-mono tracking-widest">{row.original.clientNumber || "-"}</span>
      ),
    },
    {
      accessorKey: "name",
      header: () => <div className="font-bold">Name</div>,
      cell: ({ row }) => {
        return (
          <Link href={`/clients/${row.original.id}`} className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={row.original.avatar || undefined} alt={row.original.name} />
              <AvatarFallback className="font-bold text-xs flex items-center justify-center w-full h-full">
                {row.original.name ? row.original.name.split(" ").map(n => n[0]).join("").toUpperCase() : "U"}
              </AvatarFallback>
            </Avatar>
            <div className="font-medium">{row.original.name}</div>
          </Link>
        )
      },
    },
    {
      accessorKey: "email",
      header: () => <div className="font-bold">Email</div>,
    },
    {
      accessorKey: "phone",
      header: () => <div className="font-bold">Phone</div>,
    },
    {
      accessorKey: "status",
      header: () => <div className="font-bold">Status</div>,
      cell: ({ row }) => {
        return (
          <Badge variant={row.original.status === "active" ? "default" : "outline"}>
            {row.original.status === "active" ? "Active" : "Inactive"}
          </Badge>
        )
      },
    },
    {
      accessorKey: "joinDate",
      header: () => <div className="font-bold">Join Date</div>,
    },
    {
      accessorKey: "lastSession",
      header: () => <div className="font-bold">Last Session</div>,
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="font-bold">Actions</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href={`/clients/${row.original.id}`}>View profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>View workout plan</DropdownMenuItem>
              <DropdownMenuItem>Schedule session</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit client</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Delete client</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  })

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="font-bold">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No clients found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}
