# Icon Library Consolidation Plan

## Current State

The project currently uses **3 different icon libraries**:

1. **lucide-react** - Primary library (15+ imports)
   - Most commonly used icons
   - Best maintained and documented

2. **react-icons** - Secondary library (4 imports)
   - IoIosArrowDown
   - RxCross2
   - FaRegWindowMinimize
   - FaPlus

3. **react-feather** - Tertiary library (4 imports)
   - Menu, X, ExternalLink
   - ArrowRight, ArrowLeft

## Recommended Action

**Consolidate to lucide-react** (already the primary library)

### Benefits
- ✅ Single source of truth for icons
- ✅ Reduced bundle size (remove 2 dependencies)
- ✅ Consistent icon styling
- ✅ Easier maintenance
- ✅ Better performance

### Bundle Size Impact
- **Before**: ~3 icon libraries
- **After**: 1 icon library
- **Savings**: ~50KB+ reduction in bundle size

## Migration Mapping

### react-feather → lucide-react

| react-feather | lucide-react | File |
|---------------|--------------|------|
| Menu | Menu | StickyHeader.tsx |
| X | X | StickyHeader.tsx |
| ExternalLink | ExternalLink | StickyHeader.tsx |
| ArrowRight | ArrowRight | (already using lucide) |
| ArrowLeft | ArrowLeft | (already using lucide) |

### react-icons → lucide-react

| react-icons | lucide-react | Notes |
|-------------|--------------|-------|
| IoIosArrowDown | ChevronDown | Similar functionality |
| RxCross2 | X | Similar functionality |
| FaRegWindowMinimize | Minimize2 | Similar functionality |
| FaPlus | Plus | Exact match |

## Files to Update

1. **src/components/template/header/StickyHeader.tsx**
   - Replace: Menu, X, ExternalLink from react-feather
   - Use: lucide-react equivalents

2. **src/app/(application)/(blog)/blog/__components/**
   - Review icon imports
   - Replace with lucide-react

3. **src/components/shared/** 
   - Review and consolidate all icon imports

## Removal Steps

1. ✅ Update all imports to use lucide-react
2. ✅ Remove react-feather from package.json
3. ✅ Remove react-icons from package.json
4. ✅ Run `npm install` to update dependencies
5. ✅ Test all pages to ensure icons display correctly

## Status

- [ ] Phase 1: Update StickyHeader imports
- [ ] Phase 2: Update blog component imports
- [ ] Phase 3: Update other shared components
- [ ] Phase 4: Remove unused dependencies from package.json
- [ ] Phase 5: Test and verify

## Notes

- lucide-react has excellent coverage for all common icons used in this project
- Icon names are intuitive and consistent
- No breaking changes expected
- Icons will maintain visual consistency across the site

