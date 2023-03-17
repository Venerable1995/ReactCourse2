import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilter";
import ExpensesSummary from "./ExpensesSummary";

export const ExpenseDashboardPage=()=>(
    <div> 
    <ExpensesSummary/>
    <ExpenseListFilters/>
    <ExpenseList/>
    </div>
)